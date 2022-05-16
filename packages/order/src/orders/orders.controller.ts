import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('create')
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Post('cancel')
  findOne(@Param('id') id: string) {
    return this.ordersService.cancel(id);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.ordersService.getStatus(id);
  }
}
