import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from "./product";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input()
  products: Product[] | null = [];

  @Output()
  addProductToShoppingList = new EventEmitter<Product>()

  addToShoppingList(product: Product) {
    this.addProductToShoppingList.emit(product);
  }
}
