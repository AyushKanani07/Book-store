import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-books',
  standalone: true,
  imports: [],
  templateUrl: './delete-books.component.html',
  styleUrl: './delete-books.component.css'
})
export class DeleteBooksComponent implements OnInit {

  userId: string = '';
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(param =>{
      console.log(param);
      this.userId = param['userId']
    })
  }

}
