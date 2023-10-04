import { Item } from "./item";

export interface Order{
  orderId: string;
  items: Item[];
  discount?:number;
  total: number;
  totalAfterDiscount: number;
  channel: string 
}


