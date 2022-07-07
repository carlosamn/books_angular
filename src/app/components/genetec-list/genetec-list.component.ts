import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookI } from '../../models/book-interface';
import { GenetecConfirmDialogComponent } from './genetec-confirm-dialog/genetec-confirm-dialog.component';
import { GenetecDialogComponent } from './genetec-dialog/genetec-dialog.component';
import { select, Store } from '@ngrx/store';
import * as fromBookSelectors from './../../store';

@Component({
  selector: 'app-genetec-list',
  templateUrl: './genetec-list.component.html',
  styleUrls: ['./genetec-list.component.scss'],
})
export class GenetecListComponent implements OnInit {
  books: BookI[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  displayedColumns: string[] = [
    'id',
    'title',
    'authors',
    'publishDate',
    'updatedAt',
    'changeDetails',
    'actions',
  ];
  dataSource = new MatTableDataSource<BookI>();

  constructor(private matDialog: MatDialog, private store: Store) {}

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getBooksFromStore();
  }

  private getBooksFromStore() {
    this.store.pipe(select(fromBookSelectors.getBooks)).subscribe((resp) => {
      this.books = resp;
      this.dataSource.data = this.books;
    });
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openDialog(book?: BookI): void {
    this.matDialog
      .open(GenetecDialogComponent, {
        data: book,
        width: '450px',
      })
      .afterClosed()
      .subscribe(() => {});
  }

  deleteBook(id: string): void {
    this.matDialog
      .open(GenetecConfirmDialogComponent, {
        width: '450px',
        data: id,
      })
      .afterClosed()
      .subscribe(() => {});
  }
}
