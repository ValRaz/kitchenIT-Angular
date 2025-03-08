import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Sloppy Joes',
      'A kid approved classic!',
      'https://www.allrecipes.com/thmb/GKQwFKQEfAYR4iYSc89eofDUjjM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2613262-sloppy-joe-sandwiches-Brawny-4x3-1-687efcdb6a20497bbfbf9bc66db93c15.jpg',
      [
        new Ingredient('ground beef (lb)', 1),
        new Ingredient('onion (chopped)', 1),
        new Ingredient('ketchup (cup)', 0.5),
        new Ingredient('water (T)', 1),
        new Ingredient('brown sugar (T)', 1),
        new Ingredient('Worcestershire sauce (tsp)', 1),
        new Ingredient('prepared mustard (tsp)', 1),
        new Ingredient('white vinegar (tsp)', 1),
        new Ingredient('chili powder (tsp)', 1),
        new Ingredient('garlic powder (tsp)', 0.25),
        new Ingredient('onion powder (tsp)', 0.25),
        new Ingredient('salt (tsp)', 0.25),
        new Ingredient('Hamburger Buns', 2)
      ]
    ),
    new Recipe(
      'Bulgogi Beef',
      'Korean style bbq',
      'https://www.allrecipes.com/thmb/bCupxlYRkNwybOEGgsDsFK_BY4M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3983202_bulgogi-beef-korean-style-barbecue_photo-by-chef-john-61dfbe0fff934a02a815559b4cc5c633.jpg',
      [
        new Ingredient('boneless beef short ribs, sliced (lb)', 1.25),
        new Ingredient('crushed garlic (cloves)', 4),
        new Ingredient('grated yellow onion (cup)', 0.25),
        new Ingredient('toasted sesame oil (T)', 1),
        new Ingredient('brown sugar (T)', 1),
        new Ingredient('grated asian pear (cup)', 0.333),
        new Ingredient('red pepper flakes (T)', 1),
        new Ingredient('salt (tsp)', 0.5),
        new Ingredient('vegetable oil (T)', 1),
        new Ingredient('hot steamed rice (cup)', 2),
        new Ingredient('chopped green onion (cup)', 0.25)
      ]
    )
  ];

  constructor (private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList (ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe(recipe:Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next (this.recipes.slice());
  }
}
