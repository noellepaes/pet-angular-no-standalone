import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabelaRoutingModule } from './tabela-routing.module';
import { TabelaComponent } from './tabela/tabela.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    TabelaComponent
  ],
  imports: [
    CommonModule,
    TabelaRoutingModule,
    MatTableModule
  ]
})
export class TabelaModule { }
