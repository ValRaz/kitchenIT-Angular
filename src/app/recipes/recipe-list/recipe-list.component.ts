import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Description', 'https://cdn.stocksnap.io/img-thumbs/960w/colorful-spices_0XJAC8WFT0.jpg'),
    new Recipe('Another Test Recipe', 'Another Test Description', 'https://cdn.stocksnap.io/img-thumbs/960w/colorful-spices_0XJAC8WFT0.jpg')
  ];

  constructor() { }

  ngOnInit () {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}


