import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { TabelaService } from '../../services/tabela.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tabela } from '../../model/tabela';

@Component({
  selector: 'app-tabela-form',
  templateUrl: './tabela-form.component.html',
  styleUrl: './tabela-form.component.scss'
})
export class TabelaFormComponent {

  form: FormGroup;

  constructor(
    private formBuider: NonNullableFormBuilder,
    private service: TabelaService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ){
    this.form = this.formBuider.group({
      _id: [''],
      nome:['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ]],
      categoria: ['', [Validators.required]]
    });

    const tabela: Tabela = this.route.snapshot.data['tabela'];
    this.form.setValue({
      _id: tabela._id,
      nome: tabela.nome,
      categoria: tabela.categoria
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

  errorMessage(fieldName: string){
    const field = this.form.get(fieldName);

    if ( field?.hasError('required')){
      return 'Campo obtigatório';
    }

    if ( field?.hasError('minlength')){
      const requiredLength = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    }

    if ( field?.hasError('maxlength')){
      const requiredLength = field.errors ? field.errors['maxlength']['requiredLength'] : 200;
      return `Tamanho máximo excedido de ${requiredLength} caracteres.`;
    }


    return 'Campo inválido';
  }
}
