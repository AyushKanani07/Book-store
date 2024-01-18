import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [MatCardModule, NgFor],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {

  // @Input('allBooks') books: BookModel[];

  @Input('allBooks')
  get books(): BookModel[] {
    return this._books;
  }
  set books(books: BookModel[]){
    books.map(x=>x.title = 'Title: ' + x.title);
    this._books = books;
  }

  private _books: BookModel[];

  constructor() {}
 
}
