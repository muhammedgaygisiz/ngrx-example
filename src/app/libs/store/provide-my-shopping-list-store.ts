import { isDevMode, makeEnvironmentProviders } from "@angular/core";
import { createReducer, provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";

const NETAREDUCERS = undefined;

export const provideMyShoppingListStore = () => makeEnvironmentProviders([
  provideStore(
    NETAREDUCERS,
    {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode(), name: 'My Shopping List' }),
  provideState('products', createReducer([])),
  provideState('shopping-list', createReducer([]))
])
