import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { LoggingService } from './core/logging.service';
import { provideHttpClient } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppDb } from './shared/DB/coffee-db';
import { provideEffects } from '@ngrx/effects';
import { orderFeature } from './order/data-access/store/order.feature';
import { OrderEffects } from './order/data-access/store/order.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideStore(),
    provideState(orderFeature),
    provideEffects([OrderEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideHttpClient(),
    LoggingService,
    importProvidersFrom(InMemoryWebApiModule.forRoot(AppDb, { delay: 1000 })),
    provideEffects(),
  ],
};
