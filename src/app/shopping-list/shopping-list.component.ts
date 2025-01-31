import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Raspberries', 5)
  ];

  constructor () {}

  ngOnInit () {

  }

  onIngredientAdded (ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
