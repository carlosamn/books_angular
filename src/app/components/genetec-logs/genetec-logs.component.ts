import { Component, OnInit, ViewChild } from '@angular/core';

// NGRX
import { BookI } from '../../models/book-interface';
import { select, Store } from '@ngrx/store';
import * as fromStore from './../../store';

// Data table / pagination
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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

  constructor(private store: Store) {
    this.store.dispatch(fromStore.loadLogs());
  }

  ngOnInit(): void {
    this.getBooksFromStore();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private getBooksFromStore() {
    this.store.pipe(select(fromStore.getLogs)).subscribe((logs: BookI[]) => {
      this.logs = logs;
      this.dataSource.data = this.logs;
    });
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
