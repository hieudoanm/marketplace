import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order, Status } from './entities/order.entity';

@Injectable()
export class OrdersService {
  create(createOrderDto: CreateOrderDto) {
    const newOrder = new Order();
    newOrder.id = v4();
    newOrder.productName = createOrderDto.productName;
    newOrder.productPrice = createOrderDto.productPrice;
    newOrder.status = Status.CREATED;
    return 'This action adds a new order';
  }

  cancel(id: string) {
    const order = new Order();
    order.status = Status.CANCELLED;
    return `This action updates a #${id} order`;
  }

  getStatus(id: string) {
    return `This action returns a #${id} order`;
  }
}
