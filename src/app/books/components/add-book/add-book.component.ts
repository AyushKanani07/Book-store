import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';
import { MaterialModule } from '../../../shared/material.module';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, CommonModule, MaterialModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
myValue: number = 100;
// Title: any = "Title";
  constructor(private _bookService: BookService) {}

  // @ViewChild('myForms') myForms: ElementRef;

  @ViewChild('myForm') myForm: NgForm;

  // ngAfterViewChecked(): void {
  //   console.log(this.myForms);
  // }


  saveBook(value: any): void {
    console.log(value);
    const book: BookModel = new BookModel();
    book.title = value.title;
    book._author = value.author;
    book.totalPages = value.pages;
    book.price = {
      currency: "$",
      value: value.price
    };
    if(this.myForm.valid){
      this._bookService.addBook(book);
    }
    else{
      alert('Invalid form...!');
    }
    
  }

}
