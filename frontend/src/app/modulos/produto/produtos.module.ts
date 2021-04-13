import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ListagemComponent } from './components/listagem/listagem.component';
import { ProdutosService } from './service/produtos.service';
import { SharedModule } from 'src/app/shared/shared.module';
import {HomeComponent} from './components/home/home.component';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    ListagemComponent,
    HomeComponent,
  

  ],
  providers:[
    ProdutosService,
    MessageService
  ],

  imports: [
    CommonModule,
    ProdutosRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ProdutosModule { }
