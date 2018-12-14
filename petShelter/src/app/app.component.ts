import { Component, OnInit } from '@angular/core';
import { ShelterService }  from './shelter.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petShelter';
  constructor(
    private _router : Router,
    private _shelterService: ShelterService){

  }
  ngOnInit(){
    console.log("WOOF WOOF MOTHERFUZZER")
    
  }
}
