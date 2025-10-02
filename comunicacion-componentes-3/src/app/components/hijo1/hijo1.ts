import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  imports: [],
  templateUrl: './hijo1.html',
  styleUrl: './hijo1.css'
})
export class Hijo1 {


  @Output() mensajeDelVerde = new EventEmitter<string>;


  enviarMensaje():void{

    this.mensajeDelVerde.emit("Hola hermano Coral!!!")
  }


}
