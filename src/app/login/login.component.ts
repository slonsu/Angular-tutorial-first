import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  loginValue;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.loginForm = formBuilder.group({
      user: '',
      password: '',
    });
  }

  ngOnInit() {
  }

  disallow() {
    this.userService.disallow();
  }

  allow() {
    this.userService.allow();
  }

  get access() {
    return this.userService.isEnabled();
  }

  onSubmit(value) {
    this.userService.checkUser(value);
    this.loginForm.reset();
  }

}
