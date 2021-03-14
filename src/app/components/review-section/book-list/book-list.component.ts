import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[]

  constructor() {
    this.books = [
      new Book('1', "Deep Work", "Cal Newport", ""),
      new Book('2', "Test Title", "Test Author", "Test Desc")
    ]
  }

  ngOnInit(): void {
  }

}
