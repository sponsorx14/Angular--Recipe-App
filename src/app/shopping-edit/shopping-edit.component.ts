import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/model';
import {ShoppingListService} from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  nameInput: string;
  quantityInput: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  addItem() {
    const newItem: Ingredient = {
      name: this.nameInput,
      quantity: this.quantityInput
    };
    this.shoppingListService.addIngredient(newItem);
  }
}
