import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  title?: string
  description?: string
  buttonClose?: string
  buttonConfirm?: string
}

@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: './dialog-confirmation.component.html',
  styleUrls: ['./dialog-confirmation.component.css'],
})
export class DialogConfirmationComponent implements OnInit {
  data: DialogData = {
    title: 'Confirmation required',
    description: '',
    buttonClose: 'Cancel',
    buttonConfirm: 'Confirm',
  }

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
  ) {}

  ngOnInit(): void {
    this.data = { ...this.data, ...this.dialogData }
  }

  onNoClick() {
    this.dialogRef.close()
  }
}
