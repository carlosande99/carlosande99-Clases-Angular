import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  imports: [FormsModule],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {

//Los decoradores de atributo @Input y @Output SIEMPRE ESTÁN EN EL COMPONENTE HIJO!!!!
//Hay que pensar que un hijo puede ser un padre también...


  @Input() mensaje:string;
  @Output() mensajeEnviado = new EventEmitter<string>;

  elMensaje:string;

  mensajeParaPadre():void{

    this.mensajeEnviado.emit(this.elMensaje);
  }





}
