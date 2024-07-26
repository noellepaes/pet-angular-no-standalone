import { Injectable } from '@angular/core';
import { Tabela } from '../model/tabela';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {

  private readonly API = '/assets/tabela.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Tabela[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(tabela => console.log(tabela))
    );
  }
}
