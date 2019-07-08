import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})

export class TaskFormComponent implements OnInit {
  registerForm;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.pattern('[^A-Za-z0-9]')],
      repassword: '',
    });
  }

  ngOnInit() {
  }
}
