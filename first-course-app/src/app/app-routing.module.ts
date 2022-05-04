import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./components/recipes/recipes/recipes.component";
import {ShoppingListComponent} from "./components/shopping/shopping-list/shopping-list.component";
import {RecipeStartComponent} from "./components/recipes/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./components/recipes/recipe-detail/recipe-detail.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '',component: RecipeStartComponent , pathMatch: 'full'},
      { path: ':id', component: RecipeDetailComponent}
    ] },
  { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
