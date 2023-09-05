import { createAction, createFeatureSelector, createSelector, props } from "@ngrx/store";
import { ShoppingListItem } from "../shopping-list/shopping-list.item";
import { Product } from "../product-list/product";

const shoppingListSlice = createFeatureSelector<ShoppingListItem[]>('shopping-list');

export const shoppingList = createSelector(
  shoppingListSlice,
  (shoppingList) => shoppingList
);

export const addToShoppingListAction = createAction(
  '[Shopping List] Add item',
  props<{ product: Product }>()
);
