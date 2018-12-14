import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ShelterService } from '../shelter.service'
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  params : any
  pet: any
  parentParams: any
  editPet : any
  errors: any
  errorMessage: string[]
  constructor(
    private _route : ActivatedRoute,
    private _router: Router,
    private _shelterService : ShelterService
  ) { }

  ngOnInit() {
    this.errorMessage = []
    
    this._route.params.subscribe(params=>this.params = params)
    console.log(this.params)
    this.editPet = {
      name: '',
      description: '',
      type: '',
      skill1: '',
      skill2: '',
      skill3: '',
    

    }

    this._shelterService.gePetByID(this.params.id).subscribe(data=>this.editPet = data)

  }
  updatePet(){
    console.log(this.params.id, this.editPet)
    this._shelterService.editPet(this.params.id, this.editPet).subscribe(data => {
      
      if('errors' in data){
        
        this.errors = data['errors']
        for(var key in this.errors){
          this.errorMessage.push(this.errors[key].message)
          
        }
        
      }
      else{
        this._router.navigate(['/pets', this.params.id])
      }
    })
  }
}
