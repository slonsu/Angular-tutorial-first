import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { RangeValueAccessor } from '@angular/forms';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  animations: [trigger('quickLoad', [
    state('open', style({
      opacity: 1
    })),
    transition('* => open', [
      animate('1s', keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 1, offset: '1s'})
      ]))
    ])
  ])]
})
export class EmployeesComponent implements OnInit {
  state = false;

  constructor(private employeesService: EmployeesService) { }
  employees$;

  ngOnInit() {
    this.employees$ = this.employeesService.getEmployees();
    this.state = true;
  }
}
