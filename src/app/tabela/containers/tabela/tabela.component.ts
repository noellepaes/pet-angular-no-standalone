import { catchError, Observable, of } from 'rxjs';
import { TabelaService } from '../../services/tabela.service';
import { Component } from '@angular/core';
import { Tabela } from '../../model/tabela';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {

  tabela$: Observable<Tabela[]>;




  constructor(
    private readonly tabelaService: TabelaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
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

  // pega o new e adiciona a rota já criada
  onAdd(){
    this.router.navigate(['new'], {relativeTo:this.route});
  }
}
