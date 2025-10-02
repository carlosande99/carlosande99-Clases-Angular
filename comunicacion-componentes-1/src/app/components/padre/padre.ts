import { Component } from '@angular/core';
import { Hijo } from '../hijo/hijo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-padre',
  imports: [Hijo,FormsModule],
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class Padre {

  mensajeHijo:string;

  mensajeProvinienteDellHijo:string;


  mensajeDelHijo(e:string){

    //El evento es el mensaje del hijo!!!
    this.mensajeProvinienteDellHijo = e;
  }

}
