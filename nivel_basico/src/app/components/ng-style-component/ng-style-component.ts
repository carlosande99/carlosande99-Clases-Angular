import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style-component',
  imports: [NgStyle,FormsModule],
  templateUrl: './ng-style-component.html',
  styleUrl: './ng-style-component.css'
})
export class NgStyleComponent {

    colorFondo:string="#000000";
    colorTexto:string="yellow";
    stock:boolean=false;
    miPadding:boolean= true;
    bgColor:string="grey";
    tamanoTexto:number=24;


    


    masGrande():void{

      this.tamanoTexto ++;

    }

    masPequeno():void{

      this.tamanoTexto --;

    }

}
