import { Routes } from '@angular/router';
import { TabelaFormComponent } from '../components/tabela-form/tabela-form.component';


const routes: Routes = [
  {
    path: 'cursos/:id',
    component: TabelaFormComponent ,
    resolve: {
      tabela: TabelaFormComponent
    }
  }
];
