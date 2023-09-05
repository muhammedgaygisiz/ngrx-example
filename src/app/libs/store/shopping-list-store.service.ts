import { inject, Injectable } from "@angular/core";
import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import { Product } from "../product-list/product";

const productsSlice = createFeatureSelector<Product[]>('products');

const products = createSelector(
  productsSlice,
  (products) => products
);

@Injectable({
  providedIn: "root"
})
export class ShoppingListStoreService {
  store = inject(Store);

  product$ = this.store.select(products);
}
