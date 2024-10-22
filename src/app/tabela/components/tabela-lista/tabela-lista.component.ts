import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tabela } from '../../model/tabela';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tabela-lista',
  templateUrl: './tabela-lista.component.html',
  styleUrl: './tabela-lista.component.scss'
})
export class TabelaListaComponent {

  @Input() tabela: Tabela[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = [ 'nome', 'categoria','actions'];

  constructor() {}

  onAdd(){
    this.add.emit(true);
  }
}
