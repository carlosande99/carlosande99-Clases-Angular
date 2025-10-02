import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  imports: [],
  templateUrl: './hijo2.html',
  styleUrl: './hijo2.css'
})
export class Hijo2 {


  @Input() mensaje:string;

  
}
