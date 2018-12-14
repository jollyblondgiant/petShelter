import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShelterService {
  
  constructor(private _http: HttpClient) {}
  
  getPets(){
    return this._http.get('/pets')
    
  }
  gePetByID(petID:string){
    return this._http.get(`/pets/${petID}`)
  }
  addPet(newPet){
    console.log("SHLTR_SRVCE_TS")
    return this._http.post('/pets', newPet)
  }
  destroyPet(petID){
    return this._http.delete(`/pets/${petID}`)
  }
  editPet(petID, updatePet){
    console.log(petID, updatePet, "AUTHOR.SERVICE.TS")
    return this._http.put(`/pets/${petID}`, updatePet)
  }
  
}
