import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { throwError } from 'rxjs';

interface IEmployee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  host = `http://dummy.restapiexample.com/api/v1`;

  constructor(private http: HttpClient) { }

  getEmployees() {
    const url = `${this.host}/employees`;
    return this.http
      .get(url)
      .pipe(map((employees: IEmployee[]) => {
        return employees.map(employee => {
          return {
            id: employee.id,
            name: employee.employee_name,
            salary: employee.employee_salary,
            age: employee.employee_age
          };
        });
      }));
  }

  addEmployees(value) {
    const url = `${this.host}/create`;
    return this.http
      .post(url, value)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error has accured: ', error.error.message);
    } else {
      console.error(`Backend returned code: ${error.status}, ` +
      `body was: ${error.error}`);
    }
    alert('Error code: ' + error.status);

    return throwError('Something bad happened, please try again later.');
  }

  getEmployeeById(id) {
    const url = `${this.host}/employee/${id}`;
    return this.http
      .get(url)
      .pipe(map((employee: IEmployee) => {
          return [{
            id: employee.id,
            name: employee.employee_name,
            salary: employee.employee_salary,
            age: employee.employee_age
          }];
      }));
  }
}
