import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [];

  constructor() { }
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
