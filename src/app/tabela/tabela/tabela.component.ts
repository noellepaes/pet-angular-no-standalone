import { catchError, Observable, of } from 'rxjs';
import { TabelaService } from './../services/tabela.service';
import { Component } from '@angular/core';
import { Tabela } from '../model/tabela';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {

  tabela$: Observable<Tabela[]>;
  displayedColumns = ['_id', 'nome', 'categoria'];



  constructor(
    private tabelaService: TabelaService,
    public dialog: MatDialog
  ) {

    this.tabela$ = this.tabelaService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar tabela.')
        return of([])
      })
    );
  }

  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
