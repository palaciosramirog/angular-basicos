import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template:`
        <h1>Hola Mundo </h1>
        <h1>{{1 + 1 }} </h1> 
        <h1>{{titulo}} </h1>
        <button (click)="numero = numero + 1;"> + 1 </button>
        <span>{{numero}}</span>
        <button (click)="numero = numero - 1;"> - 1 </button>
        <br>
        <button (click)="sumar()"> sumar + 1  </button>
        <span>{{numero}}</span>
        <button (click)="restar()"> restar - 1 </button>
        <br>
        <button (click)="acumular(1)"> acunmular + 1  </button>
        <span>{{numero}}</span>
        <button (click)="acumular(-1)"> acumular - 1  </button>

        <h3>**************   TAREA *******</h3>
        <h3>LA BASE ES: <strong> {{base}}</strong> </h3>

        <br>
        <button (click)="acumular(base)"> acunmular + {{base}}  </button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)"> acumular - {{base}}  </button>
    `
})
export class ContadorComponent{
    public titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
    sumar(){
      this.numero += 1;
    }
    restar(){
      this.numero -= 1;
    }
  
    acumular(valor: number){
      this.numero += valor;
    }
}