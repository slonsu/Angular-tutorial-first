import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})

export class TaskFormComponent implements OnInit {
  registerForm;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.pattern('[a-zA-Z0-9]{8,}')]],
      repassword: ['', [Validators.pattern('[a-zA-Z0-9]{8,}')]],
      nickname: ['', [Validators.pattern('[a-zA-Z0-9/-]+')]],
      number: ['', [Validators.pattern(/^\+380\d{9}$/)]]
    });
  }

  ngOnInit() {
  }
}
