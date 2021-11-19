import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  Property:any={
    "Id" : 1,
    "Name":"Birla House",
    "Type" :"house",
    "Price":1200
  }
  constructor() { }

  ngOnInit(): void {
  }

}
