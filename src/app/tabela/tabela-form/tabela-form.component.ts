import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private snackBar: MatSnackBar
  ){
    this.form = this.formBuider.group({
      name:[null],
      category: [null]
    });
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => console.log(result), error => {
      this.snackBar.open('erro ao salvar curso', '', {duration: 5000})
    });
  }

  onCancel(){

  }
}
