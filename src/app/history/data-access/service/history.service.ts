import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderHistory } from '../../modals';
import { Observable } from 'rxjs';

export const BACKEND_API_URL = 'http://localhost/api/history';

@Injectable({ providedIn: 'root' })
export class HistoryService {
  constructor(private httpClient: HttpClient) {}

  getOrderHistory(): Observable<OrderHistory[]> {
    return this.httpClient.get<OrderHistory[]>(`${BACKEND_API_URL}`)
  }

  createOrderHistory(order: OrderHistory){
    return this.httpClient.post<OrderHistory>(`${BACKEND_API_URL}`, order)
}}
