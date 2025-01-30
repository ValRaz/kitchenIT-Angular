import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Description', 'https://cdn.stocksnap.io/img-thumbs/960w/colorful-spices_0XJAC8WFT0.jpg')
  ];

  constructor() {

  }

  ngOnInit () {

  }
}


