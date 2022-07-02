import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { BooksService } from 'src/app/services/books.service';
import { BookI } from 'src/app/models/book-interface';
import { chanegMessage } from 'src/app/utils';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-genetec-dialog',
  templateUrl: './genetec-dialog.component.html',
  styleUrls: ['./genetec-dialog.component.scss'],
})
export class GenetecDialogComponent implements OnInit {
  isLoading: boolean = false;
  protected modalType: string = 'New';
  bookForm!: FormGroup;

  // CHIPS authors
  separatorKeysCodes: number[] = [ENTER, COMMA];
  authors: any[] = [];
  addOnBlur = true;

  constructor(
    public matdialigRef: MatDialogRef<GenetecDialogComponent>,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public book: BookI,
    private _booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.bookForm = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      authors: [Validators.required],
      publishDate: ['', Validators.required],
      id: [''],
      changeDetails: [''],
    });
    if (this.book) {
      this.bookForm.addControl('updatedAt', new FormControl());
      this.bookForm.patchValue(this.book);
      this.bookForm.controls['authors'].value?.forEach((item: any) =>
        this.authors.push({ name: item })
      );
    } else {
    }

    this.modalType = this.book ? 'Edit' : 'New';
  }

  callingFunction() {
    const newAuthorsVal: any = this.authors.map((x) => x.name);
    this.bookForm.controls['authors'].setValue(newAuthorsVal);

    if (this.book) {
      if (chanegMessage(this.bookForm, this.book) !== '') {
        this.bookForm.controls['changeDetails'].setValue(
          chanegMessage(this.bookForm, this.book)
        );
        const payload = { ...this.bookForm.value };
        delete payload.id;
        this._booksService
          .postLog(payload)
          .subscribe((r) => this._booksService.getLogs().subscribe(() => {}));
      }

      this._booksService.updateBooks(this.bookForm.value).subscribe(() => {
        this._booksService.getBooks().subscribe((x) => {});
        this.matdialigRef.close();
      });
    } else {
      this.bookForm.removeControl('id');
      this._booksService.postBooks(this.bookForm.value).subscribe(() => {
        this._booksService.getBooks().subscribe((x) => {});
        this.matdialigRef.close();
      });
    }
  }

  // CHIPS Authors
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.authors.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: string): void {
    const index = this.authors.indexOf(fruit);

    if (index >= 0) {
      this.authors.splice(index, 1);
    }
  }
}
