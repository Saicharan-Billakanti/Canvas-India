import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client.js';
import { PrismaService } from '../../database/prisma.service.js';
import { PricingService } from '../../catalog/pricing/pricing.service.js';

export interface PricedCart {
  id: string;
  customerId: string | null;
  items: {
    id: string;
    variantId: string;
    designVersionId: string | null;
    quantity: number;
    unitPrice: Prisma.Decimal;
    lineTotal: Prisma.Decimal;
  }[];
  subtotal: Prisma.Decimal;
}

@Injectable()
export class CartService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pricingService: PricingService,
  ) {}

  async getOrCreateForCustomer(customerId: string) {
    const existing = await this.prisma.cart.findFirst({
      where: { customerId, status: 'ACTIVE' },
    });
    if (existing) return existing;

    return this.prisma.cart.create({ data: { customerId, status: 'ACTIVE' } });
  }

  async addItem(
    cartId: string,
    variantId: string,
    quantity: number,
    configuration?: Record<string, unknown>,
    designVersionId?: string,
  ) {
    // A customized line (with its own design) is never merged into an existing
    // line — each design version is a distinct purchase (scope §21-24).
    const existingItem = designVersionId
      ? null
      : await this.prisma.cartItem.findFirst({ where: { cartId, variantId, designVersionId: null } });

    if (existingItem) {
      return this.prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + quantity },
      });
    }

    return this.prisma.cartItem.create({
      data: { cartId, variantId, quantity, configuration: configuration as never, designVersionId },
    });
  }

  removeItem(cartItemId: string) {
    return this.prisma.cartItem.delete({ where: { id: cartItemId } });
  }

  /**
   * Recomputes every line and the subtotal server-side (scope §45: never
   * trust a frontend-submitted total). This is what checkout must call
   * immediately before creating an order.
   */
  async priceCart(cartId: string): Promise<PricedCart> {
    const cart = await this.prisma.cart.findUnique({
      where: { id: cartId },
      include: { items: true },
    });

    if (!cart) {
      throw new NotFoundException(`Cart ${cartId} not found`);
    }

    let subtotal = new Prisma.Decimal(0);
    const items = [];

    for (const item of cart.items) {
      const breakdown = await this.pricingService.calculateVariantPrice(item.variantId, item.quantity);
      subtotal = subtotal.plus(breakdown.lineTotal);
      items.push({
        id: item.id,
        variantId: item.variantId,
        designVersionId: item.designVersionId,
        quantity: item.quantity,
        unitPrice: breakdown.unitPrice,
        lineTotal: breakdown.lineTotal,
      });
    }

    return { id: cart.id, customerId: cart.customerId, items, subtotal };
  }
}
