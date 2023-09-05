import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ShoppingListStoreService {
  product$ = of([{id: 1, name: 'Apple'}]);
}
