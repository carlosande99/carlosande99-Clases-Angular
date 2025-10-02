import { Component, inject } from '@angular/core';
import { Comunicacion } from '../../services/comunicacion';

@Component({
  selector: 'app-avisador',
  imports: [],
  templateUrl: './avisador.html',
  styleUrl: './avisador.css'
})
export class Avisador {

private _comunicacionService:Comunicacion = inject(Comunicacion);


cambioEncender():void{

  this._comunicacionService.cambioVisibilidad(true);
}


cambioApagar():void{

  this._comunicacionService.cambioVisibilidad(false);
}


}
