import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //compoenentes de mi modulo
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    // que cosas quiero hacer publiucas fuera delmodulo
    exports:[
        ListadoComponent
    ],
    //modulos que voy a ocupar de otro lado
    imports:[
        CommonModule
    ]
})
export class HeroesModule{

}