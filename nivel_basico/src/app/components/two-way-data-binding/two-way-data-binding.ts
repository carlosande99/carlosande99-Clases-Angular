import { Component } from '@angular/core';
import { Credenciales } from '../../models/credenciales';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-data-binding',
  imports: [FormsModule],
  templateUrl: './two-way-data-binding.html',
  styleUrl: './two-way-data-binding.css'
})
export class TwoWayDataBinding {


  credenciales:Credenciales = {

      nombre:"",
      password:""

  }





  onSubmit():void{

      console.log(this.credenciales);

  }

}
