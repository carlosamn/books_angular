import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BooksService } from 'src/app/services/books.service';
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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialog: MatDialog,
    private _booksService: BooksService
  ) {}

  ngOnInit(): void {}

  deleteBook(): void {
    this.matdialigRef.close();
    this._booksService.deleteBooks(this.data.id).subscribe(() => {});
  }
}
