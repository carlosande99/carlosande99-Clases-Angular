import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Comunicacion {


  elementoVisible:BehaviorSubject<boolean> = new BehaviorSubject(false);
  elemento$:Observable<boolean> = this.elementoVisible.asObservable();

  cambioVisibilidad(estado:boolean):void{

    this.elementoVisible.next(estado);
  }





  
}
