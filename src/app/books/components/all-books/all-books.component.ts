import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BooksModule } from '../../books.module';
import { BookService } from '../../services/book.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BookModel } from '../../models/book.model';
import { NgFor } from '@angular/common';
import { CounterService } from '../../../shared/services/counter.service';
import { BookCardComponent } from "../book-card/book-card.component";

@Component({
    selector: 'app-all-books',
    standalone: true,
    templateUrl: './all-books.component.html',
    styleUrl: './all-books.component.css',
    imports: [RouterLink, MatCardModule, MatButtonModule, NgFor, BookCardComponent]
})
export class AllBooksComponent implements OnInit {

  private _pageTitle: string;

  public set pageTitle(value: string) {
    this._pageTitle = value;
  }
  public get pageTitle() {
    return this._pageTitle;
  }

  public books: BookModel[] = [];

  constructor(public bookService: BookService, public counter_services: CounterService) {
    // var bookservices = new BookService();
    // this.books = bookservices.getBooks();
  }

  ngOnInit(): void {
    this.pageTitle = 'All Books';
    // this.books = this.bookService.getBooks();
    const allBooks = this.bookService.getBooks();
    allBooks.forEach(b=> {
      var obj = new BookModel();
      obj.id = b.id;
      obj.author = b.author;
      obj.price = b.price;
      obj.title = b.title;
      obj.img = b.img;
      obj.totalPages = b.totalPages;

      this.books.push(obj);
    })
    console.log(this.books);
  }


  public increase(): void{
    this.counter_services.incCounter();
  }
  public decrease(): void{
    this.counter_services.decCounter();
  }
}
