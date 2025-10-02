import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Comunicacion } from '../../services/comunicacion';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-componente3',
  imports: [],
  templateUrl: './componente3.html',
  styleUrl: './componente3.css'
})
export class Componente3 implements OnInit , OnDestroy{
  private _comunicacionService:Comunicacion = inject(Comunicacion);

  suscripcion:Subscription;
  estado:boolean;

  //Çuando nos suscribimos a un Observable "Hot" tenemos que tener en cuenta destruirlo
  //en el momento en que el componente se desmonte
  //El sitio ideal para hacerlo es en el hook ngOnDestroy
  ngOnDestroy(): void {
   this.suscripcion.unsubscribe();
  }


  ngOnInit(): void {
    
    this.suscripcion = this._comunicacionService.elemento$.subscribe({


      next: (data) => {this.estado = data}


    });

  }
}
