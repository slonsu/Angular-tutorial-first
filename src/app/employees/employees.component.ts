import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { RangeValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(private employeesService: EmployeesService) { }
  employees$;

  ngOnInit() {
    this.employees$ = this.employeesService.getEmployees();
  }
}
