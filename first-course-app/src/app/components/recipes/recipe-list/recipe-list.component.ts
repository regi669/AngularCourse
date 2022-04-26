import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../models/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe:Recipe;
  recipes: Recipe[] = [
    new Recipe('name', 'desc', 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'),
    new Recipe('name2', 'desc2', 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg')
  ];
  @Output()
  recipeSelectedList = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe) {
    this.recipeSelectedList.emit(recipe)
  }

}
