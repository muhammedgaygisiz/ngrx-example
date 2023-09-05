import { Component, Input } from '@angular/core';
import { ShoppingListItem } from "./shopping-list.item";
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  @Input()
  shoppingList: ShoppingListItem[] = [];

}
