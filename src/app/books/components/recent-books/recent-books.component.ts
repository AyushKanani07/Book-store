import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { MatCard, MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { BookCardComponent } from "../book-card/book-card.component";
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-recent-books',
    standalone: true,
    templateUrl: './recent-books.component.html',
    styleUrl: './recent-books.component.css',
    imports: [MatCardModule, NgFor, BookCardComponent, MatIconModule, RouterLink]
})
export class RecentBooksComponent implements OnInit {

  public recentBooks: BookModel[];
  

  constructor(private _bookService: BookService){}

  ngOnInit(): void{
    this.getRecentBooks();
  }

  private getRecentBooks(): void{
    this.recentBooks = this._bookService.recentBooks();
    console.log(this.recentBooks);
  }

  

}
