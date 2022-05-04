import {EventEmitter, Injectable} from '@angular/core';
import { Recipe } from "../models/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('name', 'desc', 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'),
    new Recipe('name2', 'desc2', 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }


  constructor() { }
}
