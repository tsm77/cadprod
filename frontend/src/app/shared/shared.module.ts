import { NgModule } from '@angular/core';
import { PRIMENG_IMPORTS } from './primeng-imports';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProdutosService } from '../modulos/produto/service/produtos.service';




@NgModule({
    declarations: [
        CardComponent,
        FormularioComponent



    ],
    imports: [
        PRIMENG_IMPORTS,
        FormsModule,
        ReactiveFormsModule,
        InputNumberModule
    ],
    providers: [
        ConfirmationService,
    
    ],
    exports: [
        PRIMENG_IMPORTS,
        CardComponent,
        FormularioComponent

    ]
})
export class SharedModule { }
