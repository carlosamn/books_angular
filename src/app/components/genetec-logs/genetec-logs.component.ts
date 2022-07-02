import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BooksService } from 'src/app/services/books.service';
import { BookI } from '../../models/book-interface';

@Component({
  selector: 'app-genetec-logs',
  templateUrl: './genetec-logs.component.html',
  styleUrls: ['./genetec-logs.component.scss'],
})
export class GenetecLogsComponent implements OnInit {
  logs!: BookI[];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  displayedColumns: string[] = [
    'id',
    'title',
    'authors',
    'updatedAt',
    'changeDetails',
  ];
  dataSource = new MatTableDataSource<BookI>();

  constructor(private _booksService: BooksService) {}

  ngOnInit(): void {
    this._booksService.getLogs().subscribe(() => {});
    this.getBooksFromService();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private getBooksFromService() {
    this._booksService.logs.subscribe((resp: any) => {
      this.logs = resp;
      this.dataSource.data = this.logs;
    });
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
