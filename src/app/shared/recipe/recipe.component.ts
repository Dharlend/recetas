import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetaService } from '../service/recetas.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit{
  @Input() receta: any;

  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetaService
  ){}

  ngOnInit(): void {
    const recetaId = +this.route.snapshot.paramMap.get('id')!;
    this.receta = this.recetaService.getRecetaById(recetaId);
  }
}
