import { Component } from '@angular/core';
import { Guitarra } from '../../models/guitarra';

@Component({
  selector: 'app-instrumento',
  imports: [],
  templateUrl: './instrumento.html',
  styleUrl: './instrumento.css'
})
export class Instrumento {


  aGuitarras:Array<Guitarra> = [

    new Guitarra(1,"Gibson","Les Paul Standard",2190,["Cuerpo caoba","Tapa de arce","Binding en crema"],0,10,"g1.jpg"),
    new Guitarra(2,"Gibson","SG Standard",1325,["Cuerpo caoba","Mastil Caoba","Diapasón de palisandro"],8,5,"g2.jpg"),
    new Guitarra(3,"Fender","American Telecaster",1800,["Cuerpo de arce","Mastil de arce","Binding en negro"],3,14,"")

  ]



}
