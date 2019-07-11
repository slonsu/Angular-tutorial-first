import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.registerForm = formBuilder.group({
      user: '',
      password: '',
    });
  }

  ngOnInit() {
  }

  onSubmit(value) {
    this.userService.setUsers(value);
    this.registerForm.reset();
  }
}
