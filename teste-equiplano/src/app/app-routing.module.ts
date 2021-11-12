import { ApoliceFormComponent } from './apolice-form/apolice-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApoliceListComponent } from './apolice-list/apolice-list.component';
import { RespostaApoliceDTO } from './models/resposta-apoliceDTO';
import { ApoliceRestComponent } from './apolice-rest/apolice-rest.component';


const routes: Routes = [
  {path: 'cliente/form', component: ClienteFormComponent},
  {path: 'cliente/lista', component: ClienteListComponent},
  {path: 'cliente/form/:id', component:ClienteFormComponent},

  {path: 'apolice/form', component: ApoliceFormComponent},
  {path: 'apolice/lista', component: ApoliceListComponent},
  {path: 'apolice/form/:id', component:ApoliceFormComponent},

  {path: 'consulta/apolice/:numero', component:ApoliceRestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
