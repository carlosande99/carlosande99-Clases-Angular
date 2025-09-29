import { Component, signal } from '@angular/core';

import { Instrumento } from './components/instrumento/instrumento';

@Component({
  selector: 'app-root',
  imports: [Instrumento],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
