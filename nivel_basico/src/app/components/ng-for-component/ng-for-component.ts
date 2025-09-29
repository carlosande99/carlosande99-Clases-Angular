import { Component } from '@angular/core';
import { Piloto } from '../../models/piloto';

@Component({
  selector: 'app-ng-for-component',
  imports: [],
  templateUrl: './ng-for-component.html',
  styleUrl: './ng-for-component.css'
})
export class NgForComponent {

  piloto1:Piloto = {

    id:1,
    nombre:"Fernando Alonso",
    escuderia:"Aston Martin"
    
  }


  piloto2:Piloto = {

    id:2,
    nombre:"Max Verstappen",
    escuderia: "Red Bull"

  }


  piloto3:Piloto = {

    id:3,
    nombre:"Lewis Hamilton",
    escuderia: "Ferrari"
    
  }


  piloto4:Piloto = {

    id:4,
    nombre:"Calos Sainz",
    escuderia: "Williams"
    
  }



  aPilotos:Array<Piloto> = [this.piloto1, this.piloto2,this.piloto3,this.piloto4];


 //aPilotos2: Piloto[] = [this.piloto1, this.piloto2,this.piloto3];






}
