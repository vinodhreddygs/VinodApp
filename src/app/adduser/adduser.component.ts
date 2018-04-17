import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book/book.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { PasswordValidationDirective } from '../password-validation.directive';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers: [PasswordValidationDirective]
})
export class AdduserComponent implements OnInit {

  user: any = {};

  constructor(private router: Router, private bookService: BookService, private userService: UserService,
    private passwordValidationDirective: PasswordValidationDirective, private formBuilder: FormBuilder) { }
  // userForm = new FormGroup({
  //   first_Name: new FormControl(),
  //   last_Name: new FormControl(),
  //   email: new FormControl(null, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')),
  //   password: new FormControl(null, [Validators.minLength(4), Validators.maxLength(8)]),
  //   confirm_Password: new FormControl()

  //  },
  //   this.passwordValidationDirective.MatchPassword // your validation method
  // );
  userForm = this.formBuilder.group({
    first_Name: [''],
    last_Name: [''],
    email: ['', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],
    password: ['', [Validators.required,Validators.minLength(4), Validators.maxLength(8)]],
    confirm_password: ['', Validators.required],
  }, {
      validator: this.passwordValidationDirective.MatchPassword,
    });

  onSubmit(userDetails) {
    //console.log("User details", userDetails);
    this.userService.createUser(userDetails)
      .subscribe(
        () => {
          this.router.navigate(['/users']);
        },
        (err) => {
          console.log("Error", err);
        }
      )

  }

  reset() {

    this.router.navigate(['/users']);
  }


  ngOnInit() {
  }

}
