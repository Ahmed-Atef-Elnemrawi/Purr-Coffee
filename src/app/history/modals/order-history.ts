import { Order } from 'src/app/order/models';

export class OrderHistory {
  dateTime!: string;
  order!: Order;


  private constructor(date: string, order: Order) {
    this.dateTime = date;
    this.order = order;
  }

  static createOrderHistory(date: string, order: Order) {
    return new OrderHistory(date, order);
  }

  get itemsCount(): number {
    return this.order.items.length;
  }

  get orderTotalPrice(): number {
    return this.order.total;
  }

  get orderDiscount(): number {
    return this.order.discount || 0;
  }

  get orderTotalAfterDiscount(): number {
    return this.order.totalAfterDiscount;
  }
}
