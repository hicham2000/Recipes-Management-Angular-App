import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from "./recipe.service";
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{
 recipe:any;

  constructor(private recipeservice:RecipeService) {
  }

  ngOnInit() {
    this.recipeservice.recepesSelected
      .subscribe(
        (recipe:Recipe)=>{
          this.recipe=recipe;
        }
      );
  }

}
