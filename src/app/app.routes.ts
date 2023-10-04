import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { coffeesFeature } from './coffee/data-access/store/coffee.feature';
import { coffeeResolver } from './coffee/utils/coffee.resolver';
import { provideEffects } from '@ngrx/effects';
import { CoffeeEffects } from './coffee/data-access/store/coffee.affects';
import { orderResolver } from './order/utils/order.resolver';
import { HistoryEffects, historyFeature } from './history/data-access/store';
import { HistoryResolver } from './history/utils/history.resolver';

export const routes: Routes = [
  {
    path: 'menu',
    loadComponent: () =>
      import('./coffee/feature/coffee-list/coffee-list.component')
        .then(c => c.CoffeeListComponent),
    providers: [provideState(coffeesFeature), provideEffects(CoffeeEffects)],
    resolve: { coffee: coffeeResolver },
  },
  {
    path: 'order',
    loadComponent:() => import('./order/feature/order/order.component')
      .then(c => c.OrderComponent),
    resolve: { order: orderResolver },
  },
  {
    path:'history',
    loadComponent:() => import('./history/feature/history-page/history-page.component').then(c => c.HistoryPageComponent),
    providers:[provideState(historyFeature), provideEffects(HistoryEffects)],
    resolve:{history:HistoryResolver}
  }
];
