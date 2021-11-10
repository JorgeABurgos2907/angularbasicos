import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService:DBZService){

  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){

    if(this.nuevo.nombre.trim().length != 0 && this.nuevo.poder != undefined ){

      // this.onNuevoPersonaje.emit(this.nuevo);
      this.dbzService.agregarPersonaje( this.nuevo );
      

      console.log("Personaje Añadido");
      console.log(this.nuevo);
      

      this.nuevo = {
        nombre: '',
        poder: 0
      }

      return;
    }
  }

}
