import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core"; 

@Component({
    selector: 'app-contador' ,
    template: `
    <h1>{{title}}</h1>

    <h3>La base es: <strong> {{base}} </strong></h3>

    <button (click)= "acumular(base)"> + 1 </button>

    <span> {{numero}} </span>

    <button (click)= "acumular(-base)"> - 1 </button>
    
    `
    
})

export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 10;

    // sumar(){
    //   this.numero += 1;
    // }

    // restar(){
    //   this.numero = this.numero - 1;
    // }

    acumular( valor:number ){
        this.numero += valor;
    }

    base: number = 10;
}