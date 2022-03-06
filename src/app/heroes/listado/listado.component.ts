import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

    // se ejecuta antes delngoninit
  constructor() {
    console.log('constructor');
   }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  public heroeBorrado: string = '';
  borrarHeroe(): void{
    console.log('borrando')
    this.heroeBorrado = this.heroes.splice(0,1).toString();
    console.log('Heroe borrado', this.heroeBorrado);
  }
}
