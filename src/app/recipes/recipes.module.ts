import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    DetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipesModule { }
