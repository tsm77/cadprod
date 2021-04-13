import { FormularioComponent } from './../../shared/components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemComponent } from './components/listagem/listagem.component';

//Hakuna MAtata
const routes: Routes = [
  {
    path: '',
component: HomeComponent
},
{
  path: 'listagem',
  component: ListagemComponent
},

{
    path: 'formulario',
component: FormularioComponent },
{
      path: 'formulario/:id',
 component: FormularioComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
