import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DBZService {

    private _personajes: Personaje [] = [
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

      get personajes(): Personaje[]{
          return [...this._personajes];
      }

    constructor(){
    }

    agregarPersonaje (personaje: Personaje){
        this._personajes.push( personaje );
    }

}