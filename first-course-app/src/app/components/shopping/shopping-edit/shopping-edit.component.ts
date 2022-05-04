import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../../models/ingredient.model";
import {ShoppingListService} from "../../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredient:Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient (nameInput:HTMLInputElement, amountInput:HTMLInputElement) {
    const newIngredient = new Ingredient(nameInput.value, Number(amountInput.value))
    this.shoppingListService.addIngredient(newIngredient);
  }
}
