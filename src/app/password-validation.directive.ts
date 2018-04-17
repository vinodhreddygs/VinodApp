import { Directive } from '@angular/core';
import { AbstractControl } from '@angular/forms';


@Directive({
  selector: '[appPasswordValidation]'
})
export class PasswordValidationDirective {

  constructor() { }
  MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirm_Password = AC.get('confirm_password').value; // to get value in input tag
    if (password != confirm_Password) {      
      AC.get('confirm_password').setErrors({ MatchPassword: true });
    } else {      
      return null;
    }    
  }

}
