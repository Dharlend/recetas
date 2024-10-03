import { Routes } from '@angular/router';
import { RecipeComponent } from './shared/recipe/recipe.component';

export const routes: Routes = [
    { path:  'recipe/:id', component: RecipeComponent}
];
