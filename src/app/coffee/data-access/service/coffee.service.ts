import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coffee } from '../../models/coffee';

export const BACKEND_API_URL = 'http://localhost/api';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  constructor(private httpClient: HttpClient) {}

  getCoffeeList() {
    return this.httpClient.get<Coffee[]>(`${BACKEND_API_URL}/coffee`, {
      headers: {
        accept: 'application/json',
      },
    });
  }

  getCoffee(id: number) {
    return this.httpClient.get<Coffee>(`${BACKEND_API_URL}/coffee/${id}`, {
      headers: {
        accept: 'application/json',
      },
    });
  }
}
