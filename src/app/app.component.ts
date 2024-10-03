import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import CardsComponent from './shared/cards/cards.component';
import { RecetaService } from './shared/service/recetas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CardsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'recetario';
  recetas: any[] = [];

  constructor(private recetasService: RecetaService){}
  ngOnInit() {
    this.recetas = this.recetasService.getRecetas();
    console.log(this.recetas);
  }
}
