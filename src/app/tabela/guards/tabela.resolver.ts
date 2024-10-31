import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { TabelaService } from '../services/tabela.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tabela } from '../model/tabela';
import { inject } from '@angular/core';  // Importa o inject

// Define o resolver function
export const tabelaResolver: ResolveFn<Tabela | null> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tabela | null> => {
  const tabelaService = inject(TabelaService);  // Usando inject para obter o serviço
  const id = route.paramMap.get('id');  // Obtém o ID dos parâmetros da rota

  if (!id) {
    return of(null);  // Retorna null se nenhum ID for encontrado
  }

  return tabelaService.loadById(id).pipe(
    catchError(error => {
      console.error('Falha ao buscar os dados', error);
      return of(null);  // Retorna null ou lida com o erro de forma apropriada
    })
  );
};
