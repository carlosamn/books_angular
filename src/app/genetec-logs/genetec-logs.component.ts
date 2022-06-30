import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookI } from '../models/book-interface';

@Component({
  selector: 'app-genetec-logs',
  templateUrl: './genetec-logs.component.html',
  styleUrls: ['./genetec-logs.component.scss'],
})
export class GenetecLogsComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  displayedColumns: string[] = ['id', 'title', 'updatedAt', 'changeDetails'];

  dataSource = new MatTableDataSource<BookI>(ELEMENT_DATA);

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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