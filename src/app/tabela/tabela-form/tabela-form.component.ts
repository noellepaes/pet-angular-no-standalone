import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { TabelaService } from '../services/tabela.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tabela-form',
  templateUrl: './tabela-form.component.html',
  styleUrl: './tabela-form.component.scss'
})
export class TabelaFormComponent {

  form: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private service: TabelaService,
    private snackBar: MatSnackBar,
    private location: Location
  ){
    this.form = this.formBuider.group({
      nome:[null],
      categoria: [null]
    });
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(), error =>
      this.onError());
  }


  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Curso salvo com sucesso!', '', {duration: 5000});
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('erro ao salvar curso', '', {duration: 5000});
  }
}
