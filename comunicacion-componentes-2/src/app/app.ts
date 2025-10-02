import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Padre } from './components/padre/padre';
import { PadreDom } from './components/padre-dom/padre-dom';
import { PadreRenderer2 } from './components/padre-renderer2/padre-renderer2';

@Component({
  selector: 'app-root',
  imports: [PadreRenderer2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('comunicacion-componentes-2');
}
