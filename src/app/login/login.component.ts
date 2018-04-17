import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book/book.service';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};

  constructor(
    private router: Router, private formBuilder: FormBuilder, private bookService: BookService, private authService: AuthService
  ) { }

 
  ngOnInit() {
    this.authService.logout();
  }
  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  // clicked(){
  //   // go to Book Listing Page -- Check
  //   this.router.navigate(['/home']);
  //  }

  onSubmit(user) {
    //console.log("user", user);

    this.authService.login(user)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/home']);

        },
        (err) => {
          console.log("Error", err);
        }
      )
  }
 
}

