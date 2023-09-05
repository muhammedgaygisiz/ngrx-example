import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from '@ngrx/store-devtools';

const NETAREDUCERS = undefined;

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(
      NETAREDUCERS,
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode(), name: 'My Shopping List' })
  ]
};
