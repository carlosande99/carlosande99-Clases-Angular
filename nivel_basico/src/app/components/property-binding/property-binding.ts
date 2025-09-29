import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-binding',
  imports: [FormsModule],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css'
})
export class PropertyBinding {

  saludo:string = "hola mundo";
  miClase:string = "titular";
  miSrc:string = "manzana.jpg";
  miAlt:string = "manzana apetitosa";
  estadoBoton:boolean = true;



  changeColor():void{

    if(this.miClase == "titular"){
      this.miClase = "titular2";
    }else{

      this.miClase = "titular";

    }
    
  }

}
