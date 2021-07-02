import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ListagemComponent } from './components/listagem/listagem.component';
import { ProdutosService } from './service/produto.service';
import { SharedModule } from 'src/app/shared/shared.module';
import {HomeComponent} from './components/home/home.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './components/formulario/formulario.component';
@NgModule({
  declarations: [
    ListagemComponent,
    HomeComponent,
    FormularioComponent,
  

  ],
  providers:[
    ProdutosService,
    MessageService,
    ConfirmationService,
  ],

  imports: [
    CommonModule,
    ProdutosRoutingModule,
    SharedModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ]
})
export class ProdutosModule { }
