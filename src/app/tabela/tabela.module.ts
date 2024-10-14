import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabelaRoutingModule } from './tabela-routing.module';
import { TabelaComponent } from './tabela/tabela.component';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { TabelaFormComponent } from './tabela-form/tabela-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TabelaComponent, TabelaFormComponent],
  imports: [
    CommonModule,
    TabelaRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
})
export class TabelaModule { }
