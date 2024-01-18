import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { NgIf } from '@angular/common';
import { TestService } from '../../services/test.service';
import { AuthorModel } from '../../models/authors.model';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [SharedModule, NgIf],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent implements OnChanges {

  // @Input()
  // set data(value: number){
  //   this._data = ++value;
  // }
  // get data(){
  //   return this._data;
  // }

  // private _data: number;

  // public data: number;
  // public setData(value: number): void{
  //   this.data = value;
  // }

  // constructor(private _testServices: TestService) {}
  constructor() {}

  // @Output() myData = new EventEmitter<string>();
  
  // public btnClick(): void {
  //   // this.myData.emit("This text is form child component");
  //   this._testServices.myData = 'This text is form child component';
  // }

  // @Input() showAuthors: boolean;


  @Input() data: number;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  @Input() author: AuthorModel;

}
