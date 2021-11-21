import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertyForm:any;
@ViewChild('formsTab') staticTabs:TabsetComponent;

propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']

propertyView: IProperty = {
  Id: null,
  Name: '',
  Price: null,
  SellRent: null,
  Type: '',
  Image:''
};

  constructor(private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.addPropertyForm.controls['Name'].setValue('Ranjitha House');
    }, 1000);


  }
  onBack(){
   return this.router.navigate(['/']);
  }
  onSubmit(){

  }
  selectTab(tabId:number){
this.staticTabs.tabs[tabId].active=true;
  }
}
