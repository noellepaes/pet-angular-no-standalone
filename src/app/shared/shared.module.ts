import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoriaPipe } from './pipes/categoria.pipe';
import { AppMaterialModule } from './app-material/app-material.module';



@NgModule({
  declarations: [ErrorDialogComponent, CategoriaPipe],
  imports: [CommonModule, MatDialogModule, AppMaterialModule],
  exports: [ErrorDialogComponent, CategoriaPipe]
})
export class SharedModule {}
