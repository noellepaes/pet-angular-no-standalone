import { Injectable } from '@angular/core';
import { Tabela } from '../model/tabela';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {

  private readonly API = 'api/tabela';

  constructor(private readonly httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Tabela[]>(this.API)
    .pipe(
      first(),
      delay(500),
      tap(tabela => console.log(tabela))
    );
  }

  loadById(id: string){
   return this.httpClient.get<Tabela>(`${this.API}/${id}`);
  }

  save(record: Partial<Tabela>){
    return this.httpClient.post<Tabela>(this.API, record);
  }
}
