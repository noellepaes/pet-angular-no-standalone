import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoriaPipe } from './pipes/categoria.pipe';
import { AppMaterialModule } from './app-material/app-material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';



@NgModule({
  declarations: [ErrorDialogComponent, CategoriaPipe, ConfirmationDialogComponent],
  imports: [CommonModule, MatDialogModule, AppMaterialModule],
  exports: [ErrorDialogComponent, ConfirmationDialogComponent, CategoriaPipe]
})
export class SharedModule {}
