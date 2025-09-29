import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-component',
  imports: [NgClass],
  templateUrl: './ng-class-component.html',
  styleUrl: './ng-class-component.css'
})
export class NgClassComponent {

  clase1:string = "fondo-azul";
  clase2:string = "fondo-rojo";
  clase3:string = "fondo-verde";
  clase4:string = "letra-blanca";
  clase5:string = "padding10";

  aClases:Array<string> = [this.clase1,this.clase4,this.clase5];

  stock:number = 100;

}
