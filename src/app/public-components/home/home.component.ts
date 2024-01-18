import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CounterService } from '../../shared/services/counter.service';
import { AuthorsComponent } from "../../shared/components/authors/authors.component";
import { TestService } from '../../shared/services/test.service';
import { AuthorModel } from '../../shared/models/authors.model';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [AuthorsComponent]
})
export class HomeComponent implements OnInit , AfterViewInit {

  // @ViewChild(AuthorsComponent) private childAuthor: AuthorsComponent;
  // @ViewChild('author') private childAuthor: AuthorsComponent;

  constructor(public counter_services: CounterService, public _testService: TestService){ }

  public increase(): void{
    this.counter_services.incCounter();
  }
  public decrease(): void{
    this.counter_services.decCounter();
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.childAuthor.setData(12);
    // }, 0)
  }

  // public childData($event: any): void{
  //   console.log($event);
  // }


    public obj: AuthorModel = {id: 21, name: 'Ayush'};



}
