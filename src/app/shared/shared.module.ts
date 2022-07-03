import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    LoginComponent,
    ConfirmDialogComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [

    ConfirmDialogComponent,

  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
