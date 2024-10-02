import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaComponent } from './tabela/tabela.component';
import { TabelaFormComponent } from './tabela-form/tabela-form.component';

const routes: Routes = [
  { path: '', component: TabelaComponent },
  { path: 'new', component: TabelaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabelaRoutingModule { }
