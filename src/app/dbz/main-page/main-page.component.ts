import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { AgregarComponent } from '../agregar/agregar.component';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  personajes: Personaje [] = [
    {
      nombre: 'goku',
      poder: 9000
    },
    {
      nombre: 'vegeta',
      poder: 7000
    },
    {
      nombre: 'krilin',
      poder: 700
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregarNuevoPersonaje( argumento: Personaje ){
    // debugger;
    this.personajes.push (argumento);
  }

}
