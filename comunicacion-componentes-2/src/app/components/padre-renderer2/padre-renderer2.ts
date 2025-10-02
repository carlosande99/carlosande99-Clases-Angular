import { AfterViewInit, Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-padre-renderer2',
  imports: [],
  templateUrl: './padre-renderer2.html',
  styleUrl: './padre-renderer2.css'
})
export class PadreRenderer2 implements AfterViewInit{


  @ViewChild("miParrafo") parrafo:ElementRef;
  @ViewChild("miDiv") div:ElementRef;
  @ViewChild("miInput") input:ElementRef;
  @ViewChild("miLista") lista:ElementRef;

  @ViewChild("otroParrafo") otroParrafo:ElementRef;
  @ViewChild("contendor") elContenedor:ElementRef;

  private _renderer2:Renderer2 = inject (Renderer2);

  ngAfterViewInit(): void {
    
    //SET ATRIBUTE
    this._renderer2.setAttribute(this.div.nativeElement,"class","letra-blanca fondo-rojo");

  }

  sustituirClase():void{

    this._renderer2.setAttribute(this.div.nativeElement,"class","letra-blanca fondo-amarillo");
  }

  anadirClases():void{

    //ADD CLASS
    this._renderer2.addClass(this.div.nativeElement,"crear-padding");
    this._renderer2.addClass(this.div.nativeElement,"borde-bonito");


  }


  quitarClases():void{

    //REMOVE CLASS
    this._renderer2.removeClass(this.div.nativeElement,"borde-bonito");

  }




  eliminarParrafo():void{

    this._renderer2.removeChild(this.elContenedor.nativeElement,this.otroParrafo.nativeElement);
  }


  crearElementoDom():void{

    const miLi = this._renderer2.createElement("li");
    const miTexto = this._renderer2.createText("Soy un li nuevo");
    this._renderer2.appendChild(miLi,miTexto);
    this._renderer2.appendChild(this.lista.nativeElement,miLi)

  }

  anadirBordeNegroIzquierda():void{

    this._renderer2.setStyle(this.lista.nativeElement,"border-left","10px solid black");
  }

  ponerFondoVerde(edom:HTMLElement):void{
    
    const elElemento:ElementRef = new ElementRef(edom);
    this._renderer2.setStyle(elElemento.nativeElement,"background-color","green");
  }


}
