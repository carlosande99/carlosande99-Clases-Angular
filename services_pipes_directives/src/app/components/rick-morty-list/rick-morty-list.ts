import { Component, inject, OnInit } from '@angular/core';
import { RickMorty } from '../../services/rick-morty';

@Component({
  selector: 'app-rick-morty-list',
  imports: [],
  templateUrl: './rick-morty-list.html',
  styleUrl: './rick-morty-list.css'
})
export class RickMortyList implements OnInit{


  //resultado:number;

  private _rickMortyService: RickMorty = inject(RickMorty);

  aDatos:Array<any> = [];

  ngOnInit(): void {
   this.getDatos();
  }


  getDatos():void{

    this._rickMortyService.getPersonajes().subscribe({

      next: (datos) => {
        //console.log(datos.results);
        this.aDatos = datos.results;
        
      }
      ,
      error: (error) => {}
      ,
      complete: () => {}

    });

  }










  /* miMetodo():void{

    this.resultado = this._rickMortyService.sumar(4 , 5);
  } */

   /*  miMetodo2():void{
      this._rickMortyService.getPersonajes()
    } */

}
