import { Component, OnInit } from '@angular/core';
import { ShelterService } from '../shelter.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newPet: any
  pets: any
  go : boolean
  petName: string
  petArray: string[]
  errors: any
  errorMessage: string[]
  constructor(
    private _router : Router,
    private _shelterService: ShelterService) { }

  ngOnInit() {
    this.go = false
    this._shelterService.getPets().subscribe(data=>this.pets = data)
    this.pets = {}
    this.errorMessage = []
    this.newPet = {
      name: '',
      description: '',
      type: '',
      skill1: '',
      skill2: '',
      skill3: ''
    }
  }
  createPet(){
    this.errorMessage =[]
    this.validatePet()
        
    if(!this.errorMessage.length)
    {this._shelterService.addPet(this.newPet).subscribe(data =>{
      console.log(data['errors'])
      
      if('errors' in data){
        this.errors = data['errors']
        for(var err in this.errors){
          this.errorMessage.push(this.errors[err].message)
        }
      }else
      {
        this._router.navigate(['/pets'])
      }
    })}
    console.log("YAY NEW PET")
    this.newPet = {name: '',description: '', type: '',skill1: '',skill2: '',skill3: ''}
    
  }
  
  validatePet(){
    for(let pet in this.pets){
        
      if(this.newPet.name == this.pets[pet].name){
        
        this.errorMessage.push("We already have a pet with that name")
      }
    }
  }
}


