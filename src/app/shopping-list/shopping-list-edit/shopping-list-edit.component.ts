import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {
 @ViewChild('nameInput') nameInputRef: ElementRef;
 @ViewChild('amountInput') amountInputRef: ElementRef;

 constructor (private slService: ShoppingListService) { }

 ngOnInit() {

 }

  onAddItem () {
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingName = this.nameInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }
}
