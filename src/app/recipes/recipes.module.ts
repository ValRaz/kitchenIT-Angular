import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { DetailComponent } from './detail/detail.component';
import { RecipesComponent } from './recipes/recipes.component';



@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    DetailComponent,
    RecipesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipesModule { }
