import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss'
})
export class TabelaComponent {

  tabela: any[] = [];
  displayedColumns = ['nome', 'categoria'];

  constructor() {}

  ngOnInit():void{
    // TODO document why this method 'ngOnInit' is empty


  }

}
