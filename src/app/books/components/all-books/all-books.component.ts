import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BooksModule } from '../../books.module';
import { BookService } from '../../services/book.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BookModel } from '../../models/book.model';
import { NgFor } from '@angular/common';
import { CounterService } from '../../../shared/services/counter.service';

@Component({
  selector: 'app-all-books',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, NgFor],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css'
})
export class AllBooksComponent implements OnInit {

  public books: BookModel[] = [];

  constructor(public bookService: BookService, public counter_services: CounterService) {
    // var bookservices = new BookService();
    // this.books = bookservices.getBooks();
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    console.log(this.books);
  }


  public increase(): void{
    this.counter_services.incCounter();
  }
  public decrease(): void{
    this.counter_services.decCounter();
  }
}
