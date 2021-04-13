import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './shared/components/formulario/formulario.component';
import { ProdutosModule } from './modulos/produto/produtos.module';
import { ListagemComponent } from './modulos/produto/components/listagem/listagem.component';
import { HomeComponent } from './modulos/produto/components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listagem', component: ListagemComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'formulario/:id', component: FormularioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
