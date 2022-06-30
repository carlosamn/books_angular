import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-genetec-dialog',
  templateUrl: './genetec-dialog.component.html',
  styleUrls: ['./genetec-dialog.component.scss'],
})
export class GenetecDialogComponent implements OnInit {
  isLoading: boolean = false;
  protected modalType: string = 'New';

  constructor(
    public matdialigRef: MatDialogRef<GenetecDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public book: any
  ) {}

  ngOnInit(): void {
    this.modalType = this.book ? 'Edit' : 'New';
  }
}
