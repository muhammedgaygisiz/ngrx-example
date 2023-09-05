import { isDevMode, makeEnvironmentProviders } from "@angular/core";
import { createReducer, provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { Product } from "../product-list/product";
import { shoppingListReducers } from "./shopping-list.slice";

const NETAREDUCERS = undefined;

const INITIAL_PRODUCTS: Product[] = [
  {id: 1, name: 'Orange'},
  {id: 2, name: 'Apple'},
  {id: 3, name: 'Plum'},
];

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
  provideState('products', createReducer(INITIAL_PRODUCTS)),
  provideState('shopping-list', shoppingListReducers)
])
