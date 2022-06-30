import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookI } from '../models/book-interface';
import { GenetecConfirmDialogComponent } from './genetec-confirm-dialog/genetec-confirm-dialog.component';
import { GenetecDialogComponent } from './genetec-dialog/genetec-dialog.component';

@Component({
  selector: 'app-genetec-list',
  templateUrl: './genetec-list.component.html',
  styleUrls: ['./genetec-list.component.scss'],
})
export class GenetecListComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'authors',
    'publishDate',
    'updatedAt',
    'changeDetails',
    'actions',
  ];
  dataSource = new MatTableDataSource<BookI>(ELEMENT_DATA);

  constructor(private matDialog: MatDialog) {}

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {}

  applyFilter(filterValue: any) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openDialog(book?: any): void {
    this.matDialog
      .open(GenetecDialogComponent, {
        //data: book,
        width: '450px',
      })
      .afterClosed()
      .subscribe(() => {});
  }

  deleteBook(book?: any): void {
    this.matDialog
      .open(GenetecConfirmDialogComponent, {
        //data: book,
        width: '450px',
      })
      .afterClosed()
      .subscribe(() => {});
  }
}

const ELEMENT_DATA: BookI[] = [
  {
    id: 1235,
    title: 'Hydrogen',
    description: 'description',
    updatedAt: 'H',
    publishDate: 'H',
    authors: 'Marlon',
    changeDetails: 'ruben added as an author',
  },
  {
    id: 4545,
    title: 'Brida',
    description: 'description',
    updatedAt: 'H',
    publishDate: 'H',
    authors: 'Paulo cohello',
    changeDetails: 'title changed to Brida',
  },
];
