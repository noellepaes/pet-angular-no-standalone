import { Observable } from 'rxjs';
import { TabelaService } from './../services/tabela.service';
import { Component } from '@angular/core';
import { Tabela } from '../model/tabela';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss'
})
export class TabelaComponent {

  tabela: Observable<Tabela[]>;
  displayedColumns = ['nome', 'categoria'];



  constructor(private tabelaService: TabelaService) {

    this.tabela = this.tabelaService.list();
  }

}
