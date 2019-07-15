import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { state, trigger, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  animations: [trigger('flyIn', [
    state('open', style({
      opacity: 1
    })),
    transition('* => open', [
      animate('1s', keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: 1, offset: '1s'})
      ]))
    ]),
    transition('open => *', [
      animate('1s', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: '1s'})
      ]))
    ])
  ])]
})
export class EmployeeComponent implements OnInit {
  popup = false;
  employee$;
  id;

  constructor(private route: ActivatedRoute, private employeesService: EmployeesService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.employee$ = this.employeesService.getEmployeeById(this.id);
  }

  delete() {
    this.employeesService.deleteEmployee(this.id).subscribe();
    this.hideDialog();
  }

  close() {
  }

  showDialog() {
    this.popup = true;
  }

  hideDialog() {
    this.popup = false;
  }
}
