import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { ShoppingListItem } from "../shopping-list/shopping-list.item";
import { Product } from "../product-list/product";

const shoppingListSlice = createFeatureSelector<ShoppingListItem[]>('shopping-list');

export const shoppingList = createSelector(
  shoppingListSlice,
  (shoppingList) => {
    const productsInShoppingList = shoppingList
      .map(item => item.name)
      .reduce((prev: string[], curr: string) => prev.includes(curr) ? prev : [ ...prev, curr ], []);

    return productsInShoppingList.map(product => ({
      name: product,
      amount: shoppingList.filter(item => item.name === product).length
    }));
  }
);

export const addToShoppingListAction = createAction(
  '[Shopping List] Add item',
  props<{ product: Product }>()
);

const INITIAL_SHOPPING_LIST: ShoppingListItem[] = [];

export const shoppingListReducers = createReducer(
  INITIAL_SHOPPING_LIST,
  on(
    addToShoppingListAction,
    (state, action) => {
      const product = action.product;

      return [
        ...state,
        {
          name: product.name,
          amount: 1
        }
      ];
    }
  )
);
