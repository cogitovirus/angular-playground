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
      new Book("cv-review-deep-work", "Deep Work", "Cal Newport",
      9, "Deep Work is an indispensable guide to anyone seeking focused success in a distracted world.",
      "/assets/reviews/media/cv-review-deep-work.jpg"),
      
      new Book("cv-review-american-kingpin",
      "American Kingpin: The Epic Hunt for the Criminal Mastermind Behind the Silk Road",
      "Nick Bilton", 8,"The unbelievable true story of the man who built a billion-dollar online drug empire from his bedroom, and almost got away with it.",
      "/assets/reviews/media/cv-review-american-kingpin.jpg")
    ]
  }

  ngOnInit(): void {
  }

}
