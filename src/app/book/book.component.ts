import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BookService } from "./book.service";
import { Book } from "./book";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  books: Book[];
  statusMessage: string;
  book = new Book();

  constructor(private _bookService: BookService, private _router: Router) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this._bookService.getAllBooks().subscribe(
      bookData => (this.books = bookData),
      error => {
        console.log(error);
        this.statusMessage = "Problem with service. Please try again later!";
      }
    );
  }

  addBook(): void {
    this._bookService.addBook(this.book).subscribe(
      response => {
        console.log(response);
        this.getBooks();
        this.reset();
        this.getBooks();
      },
      error => {
        console.log(error);
        this.statusMessage = "Problem with service. Please try again later!";
      }
    );
  }

  private reset() {
    this.book.id = null;
    this.book.title = null;
    this.book.author = null;
  }

  deleteBook(bookId: string) {
    console.log("Inside the deleteBook()::::Book id::::" + bookId);
    this._bookService.deleteBook(bookId).subscribe(
      response => {
        console.log(response);
        this.getBooks();
      },
      error => {
        console.log(error);
        this.statusMessage = "Problem with service. Please try again later!";
      }
    );
    this.reset();
    console.log("end of deleteBook():::::::");
  }

  getBook(bookId: string) {
    this._bookService.getBookById(bookId).subscribe(bookData => {
      this.book = bookData;
      this.getBooks();
    }),
      error => {
        console.log(error);
        this.statusMessage = "Problem with service. Please try again later!";
      };
    this.reset();
  }
}
