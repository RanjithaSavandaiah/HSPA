import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 loggedInUser:string;
  constructor(private alertify:AlertifyService, private router:Router) { }

  ngOnInit() {
  }

  loggedin(){
    console.log(localStorage.getItem('userName'));
    this.loggedInUser='Ranjitha';
    return localStorage.getItem('userName');
  }

  onLogOut(){
    this.alertify.success("you logged out successfully");
    this.router.navigate(['user/login'])
   return localStorage.removeItem('userName');
  }
}
