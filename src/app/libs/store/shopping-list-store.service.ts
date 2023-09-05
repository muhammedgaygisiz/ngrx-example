import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { products } from "./products.slice";

@Injectable({
  providedIn: "root"
})
export class ShoppingListStoreService {
  store = inject(Store);

  product$ = this.store.select(products);
}
