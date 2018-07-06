import {Component, ElementRef, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {Ingredient} from '../model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('quantityInput') quantityInput: ElementRef;
  @Output() itemAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }
  addItem() {
    const newItem = new Ingredient(this.nameInput.nativeElement.value, this.quantityInput.nativeElement.value);
    this.itemAdded.emit(newItem);
  }

}
