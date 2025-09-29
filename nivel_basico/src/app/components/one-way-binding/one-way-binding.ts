import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  imports: [],
  templateUrl: './one-way-binding.html',
  styleUrl: './one-way-binding.css'
})
export class OneWayBinding {

  titular:string = "Soy un titular";
  subtitular:string = 'Soy un sub titular';
  edad:number = 24;
  
}
