import { Module } from '@nestjs/common';
import { CartModule } from './cart/cart.module.js';
import { OrdersModule } from './orders/orders.module.js';

@Module({
  imports: [CartModule, OrdersModule],
  exports: [CartModule, OrdersModule],
})
export class CommerceModule {}
