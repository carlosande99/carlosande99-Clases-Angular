import { Component } from '@angular/core';
import { TwoWayDataBinding } from '../two-way-data-binding/two-way-data-binding';

@Component({
  selector: 'app-ng-if',
  imports: [TwoWayDataBinding],
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.css'
})
export class NgIf {

  esVisible:boolean = false;


  toogle(e:any):void{


    this.esVisible = !this.esVisible;

    //console.log(e);


  }
}
