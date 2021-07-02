import { NgModule } from '@angular/core';
import { PRIMENG_IMPORTS } from './primeng-imports';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogService } from 'primeng/dynamicdialog';
import { AlertaService } from './util/alerta.service';
import { ModalService } from './util/modal.serivce';




@NgModule({
    declarations: [
        CardComponent,

    ],
    imports: [
        PRIMENG_IMPORTS,
        FormsModule,
        ReactiveFormsModule, 
        InputNumberModule
    ],
    providers: [
        ConfirmationService,
        ModalService,
        AlertaService,
        MessageService,
        DialogService,
    ],
    exports: [
        PRIMENG_IMPORTS,
        CardComponent,
        FormsModule,
        ReactiveFormsModule,

    ]
})
export class SharedModule { }
