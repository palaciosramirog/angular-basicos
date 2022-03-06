import {Component}  from '@angular/core';
@Component({
selector: 'app-heroe',
templateUrl: 'heroe.component.html'

})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number= 45;
    
    // getter
    get nombreCapitalizado(): string{
       return this.nombre.toUpperCase(); 
    }
    obtenerNombre(): string{
        //con js
        return `${this.nombre} - ${this.edad}`;
        //con ts
        //return this.nombre + ' - ' + this.edad.toString;
    }
    cambiarNombre(): void{
        this.nombre = 'Spiderman' ;   
    }
    cambiarEdad(): void{
        this.edad = 30;    
    }
}