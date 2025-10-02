import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [NgStyle],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo implements OnInit {


  @Input() color:string;
  @Input() nombre:string;

  variableHijo:string;

  ngOnInit(): void {
   this.variableHijo = "soy una variable de " + this.nombre;
  }

  metodoHijo():string{

    return "Hola desde un método de " + this.nombre;
  }

}
