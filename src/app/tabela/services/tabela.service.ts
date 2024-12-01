import { Injectable } from '@angular/core';
import { Tabela } from '../model/tabela';
import { HttpClient } from '@angular/common/http';
import { delay, first, Observable, tap } from 'rxjs';

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

  save(record: Partial<Tabela>): Observable<Tabela>{
    console.log(record);
    if(record._id){
      console.log('update');
      return this.update(record);
    }
    console.log('create');
    return this.create(record);
  }

  private create(record: Partial <Tabela>){
    return this.httpClient.post<Tabela>(this.API, record).pipe(first());
  }

  private update(record: Partial<Tabela>){
    return this.httpClient.put<Tabela>(`${this.API}/${record._id}`, record).pipe(first());
  }
}
