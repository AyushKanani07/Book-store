import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';
import {MatRadioModule} from '@angular/material/radio';


@Component({
  selector: 'app-add-book-reactive',
  standalone: true,
  imports: [FormsModule, CommonModule, MaterialModule, ReactiveFormsModule, MatRadioModule, NgFor],
  templateUrl: './add-book-reactive.component.html',
  styleUrl: './add-book-reactive.component.css'
})
export class AddBookReactiveComponent implements OnInit {

  public addBookForm: FormGroup;
  titleErrorMessage: any;
  

  constructor(private _bookService: BookService, private _formBuilder: FormBuilder) { }

  // @ViewChild('myForm') myForm: NgForm;


  curriencies: any[] = [
    {value: 'USD', viewValue: 'US Dollar'},
    {value: 'INR', viewValue: 'Indian Rupees'},
  ];

  ngOnInit(): void {
    this.initForm();
    // console.log(this.addBookForm.controls['title']);
    // console.log(this.addBookForm.get('title').valid);

    const titleControl = this.addBookForm.get('title');
    titleControl?.valueChanges.subscribe(x => {
      console.log(x);
      this.validateTitle(titleControl as FormControl);
    })

    const formatTypeControl = this.addBookForm.get('formatType');
    formatTypeControl?.valueChanges.subscribe(x => {
      console.log(x);
      this.formatTypeChange(x);
    })
  }

  public get authors(){
    return <FormArray>this.addBookForm.get('authors')
  }

  public addMoreAuthor(): void{
    this.authors.push(this.getAuthorControl())
  }

  public removeAuthor(i: number): void{
    this.authors.removeAt(i);
  }

  //This function is for set the default value for form 
  //Using patchValue we can set single default value
  //But in setValue we have to provide all the field which is present in object
  updateFormValue(): void{
    this.addBookForm.patchValue({
      title: 'Sam Heroult',
      author: 'Default author',
      totalPages: 421,
      price: {
        currency: 'USD',
        value: 1221,
      }
    });
  }

  private initForm(): void {
    // this.addBookForm = new FormGroup({
    //   title: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(41)]),
    //   author: new FormControl('',[Validators.required, Validators.maxLength(21)]),
    //   totalPages: new FormControl(null, [Validators.required, Validators.min(12), Validators.max(2100)]),
    //   price: new FormGroup({
    //     currency: new FormControl('',Validators.required),
    //     value: new FormControl('',Validators.required)
    //   }),
    //   formatType: new FormControl(),
    //   pdfFormat: new FormControl(),
    //   docFormat: new FormControl(),
    // })
    this.addBookForm = this._formBuilder.group({
      title: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(41)]],
      // author: ['',[Validators.required, Validators.maxLength(21)]],
      totalPages: ['',[Validators.required, Validators.min(12), Validators.max(2100)]],
      price: this._formBuilder.group({
        currency: ['',Validators.required],
        value: ['',Validators.required],
      }),
      formatType: '',
      pdfFormat: '',
      docFormat: '',
      authors: this._formBuilder.array([])
    })
  }

  private getAuthorControl(): FormGroup{
      return this._formBuilder.group({
        fullName: ''
      });
  }

  saveBook(value: any): void {
    console.log(value);
    const book: BookModel = new BookModel();
    book.title = value.title;
    book._author = value.author;
    book.totalPages = value.pages;
    book.price = {
      currency: value.currency,
      value: value.price
    };
    this._bookService.addBook(this.addBookForm.value);
    // if(this.addBookForm.valid){
    //   this._bookService.addBook(this.addBookForm.value);
    // }
    // else{
    //   alert('Invalid form...!');
    // }
  }


  //error handling in component.ts file

  private validateTitle(titleControl: FormControl): void{
    this.titleErrorMessage = '';
    if(titleControl.errors && (titleControl.touched || titleControl.dirty)){
      if(titleControl.errors?.['required']){
        this.titleErrorMessage = 'This is a required feild';
      }
      else if(titleControl.errors?.['minlength']){
        this.titleErrorMessage = 'Minimum Length is ' + titleControl.errors?.['minlength']?.requiredLength;
      }
      else if(titleControl.errors?.['maxlength']){
        this.titleErrorMessage = 'Maximum Length is ' + titleControl.errors?.['maxlength']?.requiredLength;
      }
    }
  }

  private formatTypeChange(formatType: string): void{
    const pdfControl = this.addBookForm.get('pdfFormat');
    const docControl = this.addBookForm.get('docFormat');
    if(formatType==='pdf'){
      pdfControl?.addValidators(Validators.required);
      docControl?.clearValidators();
    }
    else if(formatType==='doc'){
      docControl?.addValidators(Validators.required);
      pdfControl?.clearValidators();
    }

    pdfControl?.updateValueAndValidity();
    docControl?.updateValueAndValidity();
  }

}
