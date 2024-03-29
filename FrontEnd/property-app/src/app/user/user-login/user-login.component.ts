import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService, private alertify:AlertifyService,private router:Router) { }

  ngOnInit() {
  }
onLogin(loginForm:NgForm){
const user = this.authService.authUser(loginForm.value);
if(user)
{
  this.alertify.success('User Logged in');
  this.router.navigate(['/']);
}
else{
  this.alertify.error('enter correct credentials')
}
}
}
