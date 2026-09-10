import { Module } from '@nestjs/common';
import { ShippingController } from './shipping.controller.js';
import {
  COURIER_PROVIDER,
  ShippingService,
} from './shipping.service.js';
import { StubCourierAdapter } from './adapters/stub-courier.adapter.js';

@Module({
  controllers: [ShippingController],
  providers: [
    ShippingService,
    {
      provide: COURIER_PROVIDER,
      useClass: StubCourierAdapter,
    },
  ],
  exports: [ShippingService],
})
export class ShippingModule {}
