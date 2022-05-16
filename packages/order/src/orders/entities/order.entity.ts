export enum Status {
  CREATED = 'created',
  CONFIRMED = 'confirmed',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
}

export class Order {
  id: string;
  status: Status;
  productName: string;
  productPrice: number;
}
