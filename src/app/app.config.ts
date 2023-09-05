import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideMyShoppingListStore } from "./libs/store/provide-my-shopping-list-store";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideMyShoppingListStore()
  ]
};
