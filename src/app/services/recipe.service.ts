import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../shared/model';
import {Ingredient} from '../shared/model';
import {ShoppingListService} from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tequila-Lime Chicken Tacos',
      'Tequila-lime might sound like a margarita flavor profile, but we love using it in chicken marinades. While the chicken\'s ' +
      'marinating,' +
      ' prep the fixings: purple cabbage, Cotija, and avocado — or really anything you want.',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-tequila-lime-chicken-tacos-horizontal-1530818873' +
      '.jpg?resize=980:*',
      [
        new Ingredient('Tortilla', 3),
        new Ingredient('Chicken', 2)
      ]),
    new Recipe(
      'Pumpkin Crisp',
      'This crisp will make you forget pumpkin pie ever existed. The crunchy topping is the perfect accompaniment to the ' +
      'smooth pumpkin filling. ',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pumpkin-crisp-horizontal-1530894525.jpg?resize=980:*',
      [
        new Ingredient('Pumpkin seeds', 20),
        new Ingredient('Chicken', 3)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredients(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
