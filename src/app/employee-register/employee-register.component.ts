import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})
export class EmployeeRegisterComponent implements OnInit {

  registerForm;

  constructor(private formBuilder: FormBuilder, private employeesService: EmployeesService) {
    this.registerForm = formBuilder.group({
      name: '',
      salary: '',
      age: '',
    });
  }

  ngOnInit() {
  }

  onSubmit(value) {
    this.employeesService.addEmployees(value).subscribe(value => console.log(value));
    this.registerForm.reset();
  }
}
