import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of } from 'rxjs';
import { TabelaService } from '../../services/tabela.service';
import { Component } from '@angular/core';
import { Tabela } from '../../model/tabela';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { relative } from 'path';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {

  tabela$: Observable<Tabela[]> | null = null;




  constructor(
    private readonly tabelaService: TabelaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {

    this.refresh();
  }

  refresh(){
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

  onEdit(tabela: Tabela){
    this.router.navigate(['edit', tabela._id], {relativeTo:this.route});
  }

  onRemove(tabela: Tabela){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result){
        this.tabelaService.remove(tabela._id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Curso removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition:'center'
            });
          },
          error => this.onError('Erro ao tentar remover curso.')
        );
      }
    });
  }
}

