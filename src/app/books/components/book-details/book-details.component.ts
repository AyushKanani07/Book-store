import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  public id:number=0;
  // constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    // console.log(this.route)
    // this.route.params.subscribe(param =>{
    //   console.log(param);
    //   this.id=param['id'];
    // })
  }
}
