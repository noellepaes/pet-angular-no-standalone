import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaComponent } from './containers/tabela/tabela.component';
import { TabelaFormComponent } from './components/tabela-form/tabela-form.component';
import { tabelaResolver } from './guards/tabela.resolver';

const routes: Routes = [
  { path: '', component: TabelaComponent },
  { path: 'new', component: TabelaFormComponent },
  { path: 'edit/:id', component: TabelaFormComponent, resolve: { tabela: tabelaResolver }}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabelaRoutingModule { }
