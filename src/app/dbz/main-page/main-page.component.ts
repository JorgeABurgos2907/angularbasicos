import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}


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

  agregar(){

    if(this.nuevo.nombre.trim().length != 0 && this.nuevo.poder != undefined ){
      this.personajes.push(this.nuevo);
      this.nuevo = {
        nombre: '',
        poder: 0
      }

      console.log("Personaje Añadido");
      // console.log(this.nuevo);

      return;
    }

    
  }

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

}
