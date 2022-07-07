import { BookI } from './models/book-interface';

export const DeleteBook = {
  TITLE: 'Delete book',
  CONFIRM: 'Would you like to delete this book?',
};

export const DATE_TIME_FORMAT = {
  parse: {
    dateInput: 'DD-MM-YYYY HH:mm',
  },
  display: {
    dateInput: 'DD-MM-YYYY HH:mm',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export const chanegMessage = (form: any, book: BookI) => {
  let changes: string = '';

  if (book.title !== form.controls['title'].value) {
    changes += `title was changed to ${form.controls['title'].value} `;
  }
  if (book.publishDate !== form.controls['publishDate'].value) {
    changes += `${
      changes.length > 0 ? ',' : ''
    } publish date was changed to ${new Date(
      form.controls['publishDate'].value
    ).toLocaleDateString('en-US')} `;
  }
  if (book.description !== form.controls['description'].value) {
    changes += `${changes.length > 0 ? ',' : ''} description was changed to ${
      form.controls['description'].value
    } `;
  }
  if (
    !book.authors.every((x: string) => form.controls['authors'].value) ||
    book.authors.length !== form.controls['authors'].value.length
  ) {
    changes += `${changes.length > 0 ? ',' : ''} Authors has been edited`;
  }
  return changes;
};
