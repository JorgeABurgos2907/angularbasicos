import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { AgregarComponent } from '../agregar/agregar.component';
import { DBZService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  // get personajes():Personaje[]{
  //   return this.dbzService.personajes;
  // }

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService:DBZService){
  }

}
