import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteBook } from 'src/app/utils';

@Component({
  selector: 'app-genetec-confirm-dialog',
  templateUrl: './genetec-confirm-dialog.component.html',
  styleUrls: ['./genetec-confirm-dialog.component.scss'],
})
export class GenetecConfirmDialogComponent implements OnInit {
  DIALOG_TEXT = DeleteBook;
  constructor(
    public matdialigRef: MatDialogRef<GenetecConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public book: any
  ) {}

  ngOnInit(): void {}
}
