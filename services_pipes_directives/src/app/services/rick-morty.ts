import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMorty {
  
  private _http:HttpClient = inject(HttpClient);

  /* sumar(a:number,b:number):number{

    return a + b;
  } */

    getPersonajes():Observable<any>{

      return this._http.get<any>("https://rickandmortyapi.com/api/character/?page=1" );

    }


}
