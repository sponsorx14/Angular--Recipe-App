import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from '../shared/model';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredients(this.selectedRecipe.ingredients);
  }
}
