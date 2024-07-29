import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabelaRoutingModule } from './tabela-routing.module';
import { TabelaComponent } from './tabela/tabela.component';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [TabelaComponent],
  imports: [
    CommonModule,
    TabelaRoutingModule,
    AppMaterialModule,
    SharedModule
  ],
})
export class TabelaModule { }
