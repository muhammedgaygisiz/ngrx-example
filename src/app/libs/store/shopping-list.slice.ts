import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShoppingListItem } from "../shopping-list/shopping-list.item";

const shoppingListSlice = createFeatureSelector<ShoppingListItem[]>('shopping-list');

export const shoppingList = createSelector(
  shoppingListSlice,
  (shoppingList) => shoppingList
);
