import { Component, Input } from '@angular/core';
import { Tabela } from '../model/tabela';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabela-lista',
  templateUrl: './tabela-lista.component.html',
  styleUrl: './tabela-lista.component.scss'
})
export class TabelaListaComponent {

  @Input() tabela: Tabela[] = [];
  readonly displayedColumns = [ 'nome', 'categoria','actions'];

  constructor(

    private router: Router,
    private route: ActivatedRoute
  ) {}

  onAdd(){
    this.router.navigate(['new'], {relativeTo:this.route});
  }
}
