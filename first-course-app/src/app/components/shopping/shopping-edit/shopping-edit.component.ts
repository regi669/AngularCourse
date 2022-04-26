import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from "../../../models/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredient:Ingredient;
  @Output()
  addedIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient (nameInput:HTMLInputElement, amountInput:HTMLInputElement) {
    this.addedIngredient.emit(new Ingredient(nameInput.value, Number(amountInput.value)))
  }
}
