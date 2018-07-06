import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'This is a test', 'https://nerdist.com/wp-content/uploads/2018/01/Dragon-Ball-Super-Goku.jpg'),
    new Recipe('Test', 'This is a test', 'https://otakukart.com/wp-content/uploads/2017/09/VegetaShockedBoG.png')
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }
  changeRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
