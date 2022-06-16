import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogModel } from '../../models/confirm-dialog-model';

@Component({
  selector: 'oc-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.sass'],
})
export class ConfirmDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public model: ConfirmDialogModel
  ) {}

  ngOnInit(): void {}
  delete() {
    this.dialogRef.close(true);
  }
  cancel(): void {
    this.dialogRef.close(false);
  }
}
