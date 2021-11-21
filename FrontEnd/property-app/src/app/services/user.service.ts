import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }
createUsers(user) {
  let users: any;
  if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
    //users = [user,...users];
  } else {
    localStorage.setItem('users', JSON.stringify(users));
  }
}
}
