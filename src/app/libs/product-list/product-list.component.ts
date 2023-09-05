import { Component, Input } from '@angular/core';
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

}
