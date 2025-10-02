import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-padre-dom',
  imports: [],
  templateUrl: './padre-dom.html',
  styleUrl: './padre-dom.css'
})
export class PadreDom implements AfterViewInit{


  @ViewChild("miParrafo") parrafo:ElementRef;
  @ViewChild("miSpan") span:ElementRef;
  @ViewChild("miInput") input:ElementRef;


  ngAfterViewInit(): void {
    this.input.nativeElement.value = "Rammstein";
    this.parrafo.nativeElement.innerHTML = "Hola Mundo";
    this.span.nativeElement.innerHTML = "Soy un span"
  }







}
