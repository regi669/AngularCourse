import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../models/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Name', 5),
    new Ingredient('Name2', 15)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }


  addIngredient(ingredient : Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  constructor() {
  }
}