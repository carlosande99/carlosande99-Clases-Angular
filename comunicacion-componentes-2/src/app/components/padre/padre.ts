import { Component, ViewChild } from '@angular/core';
import { Hijo } from '../hijo/hijo';

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class Padre {

  @ViewChild("hijo1") h1:Hijo;
  @ViewChild("hijo2") h2:Hijo;

  colorHijo1:string="yellow";
  colorHijo2:string="red";

  nombreHijo1:string = "Manolito";
  nombreHijo2:string = "Mafalda";


  espiarHijo1():void{

    console.log(this.h1.metodoHijo());
    console.log(this.h1.variableHijo);
  }

  espiarHijo2():void{

    console.log(this.h2.metodoHijo());
    console.log(this.h2.variableHijo);
  }

}
