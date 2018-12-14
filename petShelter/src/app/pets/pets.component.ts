import { Component, OnInit } from '@angular/core';
import { ShelterService } from '../shelter.service';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: any
  
  constructor(
    private _shelterService: ShelterService,
    
    ) { }

  ngOnInit() {
    
    this.getPets()
    
  }
   getPets(){
    this._shelterService.getPets().subscribe(data=>this.pets=data)
    
  }
 

}
