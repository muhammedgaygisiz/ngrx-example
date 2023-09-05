import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../product-list/product";

const productsSlice = createFeatureSelector<Product[]>('products');

export const products = createSelector(
  productsSlice,
  (products) => products
);
