import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";


@NgModule({
    //compoenentes de mi modulo
    declarations:[
        ContadorComponent
    ],
    // que cosas quiero hacer publiucas fuera delmodulo
    exports:[
        ContadorComponent
    ],
    //modulos que voy a ocupar de otro lado
    imports:[
        CommonModule
    ]
})
export class ContadorModule{

}