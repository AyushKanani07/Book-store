import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
  providers: [BookService]
})
export class BooksComponent implements OnInit {





  // bookId: number = 4;

  // constructor(private route:ActivatedRoute){}

  ngOnInit(): void {


    // console.log(this.route)
    // this.route.firstChild?.params.subscribe(param =>{
    //   console.log(param);
    // })
  }

}
