import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { products } from "./products.slice";
import { addToShoppingListAction, shoppingList } from "./shopping-list.slice";
import { Product } from "../product-list/product";

@Injectable({
  providedIn: "root"
})
export class ShoppingListStoreService {
  store = inject(Store);

  product$ = this.store.select(products);
  shoppingList$ = this.store.select(shoppingList);

  addToShoppingList(product: Product) {
    this.store.dispatch(addToShoppingListAction({ product }))
  }
}
