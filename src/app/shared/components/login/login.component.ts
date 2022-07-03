import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'oc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  errorCredential: string = 'Username or password is invalid';
  isValidCredential: boolean = true;

  formLogin: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit() {
    if (this.formLogin.valid) {
      // console.log("Submit", this.formLogin.value);
      this.validateLogin(this.formLogin.value);
    }
  }

  private validateLogin(user: User) {
    if (user.username === 'admin' && user.password === 'admin') {
      console.log('Good, you are logged in');
      this.isValidCredential = true
      this.router.navigate(['/products']);
    } else {
      this.isValidCredential = false
      // console.error("Bad, you are not logged in");
    }
  }
}
