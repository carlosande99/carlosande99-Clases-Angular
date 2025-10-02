import { Component } from '@angular/core';
import { Hijo1 } from '../hijo1/hijo1';
import { Hijo2 } from '../hijo2/hijo2';

@Component({
  selector: 'app-padre',
  imports: [Hijo1,Hijo2],
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class Padre {

  mensajeRecibido:string;

  mensajeDelHijo1(e:string):void{

    this.mensajeRecibido = e;
  }

}
