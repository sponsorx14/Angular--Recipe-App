import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../shared/model';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  submitData() {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }

}
