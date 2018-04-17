import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book/book.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { PatternValidator } from '@angular/forms';

//import { BookService } from '../book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private router: Router, private bookService: BookService) { }
  userForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    publisher: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    price: new FormControl(null, Validators.pattern('^[0-9]{1,4}$'))

  });


  book: any = {};



  onSubmit(value) {
    this.bookService.createBook(value)
      .subscribe(
        () => {
          this.router.navigate(['/home']);
        },
        (err) => {
          console.log("Error", err);
        }
      )
    // console.log("value",value);
    //this.bookService.addBookToList(value);
    //this.form.markAsPristine();	

  };

  reset() {

    this.router.navigate(['/home']);
  }



  ngOnInit() {

  }

}
