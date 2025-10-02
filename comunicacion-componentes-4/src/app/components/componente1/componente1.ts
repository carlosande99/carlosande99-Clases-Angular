import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Comunicacion } from '../../services/comunicacion';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-componente1',
  imports: [],
  templateUrl: './componente1.html',
  styleUrl: './componente1.css'
})
export class Componente1 implements OnInit , OnDestroy{

  private _comunicacionService:Comunicacion = inject(Comunicacion);

  suscripcion:Subscription;

  //Çuando nos suscribimos a un Observable "Hot" tenemos que tener en cuenta destruirlo
  //en el momento en que el componente se desmonte
  //El sitio ideal para hacerlo es en el hook ngOnDestroy
  ngOnDestroy(): void {
   this.suscripcion.unsubscribe();
  }


  ngOnInit(): void {
    
    this.suscripcion = this._comunicacionService.elemento$.subscribe({


      next: (data) => {}


    });

}
}
