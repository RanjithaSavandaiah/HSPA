import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }
authUser(user:any){
let userArray=[];
if (localStorage.getItem('users')){
  userArray=JSON.parse(localStorage.getItem('users'));
}
// return userArray.find(p=>p.userName === user.userName && p.password=== user.password);
return true;
}

}
