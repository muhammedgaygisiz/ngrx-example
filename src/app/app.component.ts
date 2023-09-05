import { Component, inject } from '@angular/core';
import { ProductListComponent } from "./libs/product-list/product-list.component";
import { ShoppingListComponent } from "./libs/shopping-list/shopping-list.component";
import { ShoppingListItem } from "./libs/shopping-list/shopping-list.item";
import { AsyncPipe } from "@angular/common";
import { ShoppingListStoreService } from "./libs/store/shopping-list-store.service";
import { Product } from "./libs/product-list/product";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductListComponent,
    ShoppingListComponent,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  service = inject(ShoppingListStoreService);

  shoppingList: ShoppingListItem[] = [];

  addProductToShoppingList(product: Product) {
    this.service.addToShoppingList(product);
  }
}
