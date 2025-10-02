import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Avisador } from './components/avisador/avisador';
import { Componente1 } from './components/componente1/componente1';
import { Componente2 } from './components/componente2/componente2';
import { Componente3 } from './components/componente3/componente3';

@Component({
  selector: 'app-root',
  imports: [Avisador,Componente1,Componente2,Componente3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('comunicacion-componentes-4');
}
