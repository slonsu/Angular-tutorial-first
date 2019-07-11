import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [];
  private access = false;

  constructor() { }

  setUsers(user) {
    this.users.push(user);
  }

  getUser() {
    return this.users;
  }

  isEnabled() {
    return this.access;
  }

  disallow() {
    this.access = false;
  }

  allow() {
    this.access = true;
  }

  checkUser(value) {
    for (const user of this.users) {
      if (user.name === value.name && user.password === value.password) {
        alert('Logged in successfully (login button should become logout button "task 2")');
        this.allow();
      }
    }
  }
}
