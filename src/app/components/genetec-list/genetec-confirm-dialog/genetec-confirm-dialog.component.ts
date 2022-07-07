import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BooksService } from 'src/app/services/books.service';
import { DeleteBook } from 'src/app/utils';
import * as fromStore from './../../../store';

@Component({
  selector: 'app-genetec-confirm-dialog',
  templateUrl: './genetec-confirm-dialog.component.html',
  styleUrls: ['./genetec-confirm-dialog.component.scss'],
})
export class GenetecConfirmDialogComponent implements OnInit {
  DIALOG_TEXT = DeleteBook;
  constructor(
    public matdialigRef: MatDialogRef<GenetecConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public id: any,
    private matDialog: MatDialog,
    private _booksService: BooksService,
    private store: Store
  ) {}

  ngOnInit(): void {}

  deleteBook(): void {
    this.store.dispatch(fromStore.deleteBook({ id: this.id }));
    this.matdialigRef.close();
  }
}
