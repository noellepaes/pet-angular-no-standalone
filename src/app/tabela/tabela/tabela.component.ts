import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss'
})
export class TabelaComponent {

  tabela: any[] = [
    {_id:"1", nome: 'Angular', categoria: 'front-end'}
  ];
  displayedColumns = ['nome', 'categoria'];

  constructor() {}


}
