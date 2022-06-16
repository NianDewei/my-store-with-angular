import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'oc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit() {
    if (this.formLogin.valid) {
      console.log("Submit", this.formLogin.value);
      this.validateLogin(this.formLogin.value);
    }
  }

  private validateLogin(user: User) {
    if (user.username === 'admin' && user.password === 'admin') {
      console.log("Good, you are logged in");
      this.router.navigate(['/products']);
    }else{
      console.error("Bad, you are not logged in");
    }
  }
}
