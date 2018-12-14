import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShelterService } from '../shelter.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  params : any
  seeLike: boolean
  errors: any
  editPet: any
  likes : number
  errorMessage: string[]
  pet: any
  parentParams: any
  constructor(
    private _route: ActivatedRoute,
    private _shelterService: ShelterService,
    private _router : Router
  ) { }

  ngOnInit() {
    this.errorMessage = []
    this.seeLike = true
    this._route.params.subscribe(params=>this.params = params)
    console.log(this.params.id)
    
    this._shelterService.gePetByID(this.params.id).subscribe(data=>this.pet = data)
   
  }
  destroyPet(){
    let id = this.params.id
    this._shelterService.destroyPet(id).subscribe(data=>console.log("BALEETED"))
    this._router.navigate(['/'])
  }
  likePet(){
    console.log(this.pet)
    console.log(this.pet.likes)
    this.pet.likes += 1
    console.log(this.params.id, this.pet)
    this._shelterService.editPet(this.params.id, this.pet).subscribe(data =>console.log(data))
    this.seeLike = false
  }
}
