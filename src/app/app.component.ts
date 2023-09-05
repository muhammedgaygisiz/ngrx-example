import { Component } from '@angular/core';
import { ProductListComponent } from "./libs/product-list/product-list.component";
import { ShoppingListComponent } from "./libs/shopping-list/shopping-list.component";
import { Product } from "./libs/product-list/product";
import { ShoppingListItem } from "./libs/shopping-list/shopping-list.item";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductListComponent,
    ShoppingListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[] = [
    {id: 1, name: 'Orange'},
    {id: 2, name: 'Apple'},
    {id: 3, name: 'Plum'},
  ];

  shoppingList: ShoppingListItem[] = [];
}
