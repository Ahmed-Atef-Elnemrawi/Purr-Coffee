import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../models';
import { Observable } from 'rxjs';

const BACKEND_API_URL = 'https://localhost/api/order'

@Injectable({providedIn: 'root'})
export class OrderService {
  constructor(private httpClient: HttpClient) { }

  createOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${BACKEND_API_URL}`, order, {
      headers: {
        // accept: 'application/json',
        // 'content-type': 'application/json',
      },
    });
  }

  getOrder(orderId: string): Observable<Order> {
    return this.httpClient.get<Order>(`${BACKEND_API_URL}/${orderId}`, {
      headers: {
        // accept: 'application/json',
      },
    });
  }

}
