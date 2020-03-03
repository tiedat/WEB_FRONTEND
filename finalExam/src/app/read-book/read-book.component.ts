import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.scss'],

})
export class ReadBookComponent implements OnInit {

  name: FormControl = new FormControl();
  bookList: any[];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getBookList().subscribe(next => {
      this.bookList = next;
    });
  }

  changeRead(book: any) {
    this.bookService.updateBook(book.id, book.name, 'true').subscribe(value => {
    });
  }

  addBook() {
    const {value} = this.name;
    console.log(value);
    this.bookService.createBook(value).subscribe(next => {
      this.name.reset();
      this.ngOnInit();
    });
  }

  bookTrackByFn(index: number, item: any) {
    return item.id;
  }

}
