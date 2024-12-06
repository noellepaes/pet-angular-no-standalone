import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tabela } from '../../model/tabela';


@Component({
  selector: 'app-tabela-lista',
  templateUrl: './tabela-lista.component.html',
  styleUrl: './tabela-lista.component.scss'
})
export class TabelaListaComponent {

  @Input() tabela: Tabela[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = [ 'nome', 'categoria','actions'];

  constructor() {}

  onAdd(){
    this.add.emit(true);
  }

  onEdit(tabela: Tabela){
    this.edit.emit(tabela);
  }

  onDelete(tabela: Tabela){
    this.remove.emit(tabela)
  }
}
