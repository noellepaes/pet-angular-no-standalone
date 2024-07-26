import { catchError, Observable, of } from 'rxjs';
import { TabelaService } from './../services/tabela.service';
import { Component } from '@angular/core';
import { Tabela } from '../model/tabela';
import { error } from 'console';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {

  tabela$: Observable<Tabela[]>;
  displayedColumns = ['nome', 'categoria'];



  constructor(private tabelaService: TabelaService) {

    this.tabela$ = this.tabelaService.list()
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );
  }
}
