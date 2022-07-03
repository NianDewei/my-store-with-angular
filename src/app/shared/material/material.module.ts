import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule} from '@angular/material/progress-bar'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
