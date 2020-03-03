import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';

@Component({
  selector: 'app-readed',
  templateUrl: './readed.component.html',
  styleUrls: ['./readed.component.scss']
})
export class ReadedComponent implements OnInit {

  bookList: any[];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getBookList().subscribe(next => {
      this.bookList = next;
    });
  }

  changeRead(book: any) {
    this.bookService.updateBook(book.id, book.name, 'false').subscribe( result => {
      this.ngOnInit();
    });
  }

  bookTrackByFn(index: number, item: any) {
    return item.id;
  }
}
