import { Injectable } from '@angular/core';

// import after setup
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {
  	constructor(
  		private _http: HttpClient) {
  	}

  	getPets(){
		return this._http.get('/all_pets');
	}
  	addPet(pet){
		return this._http.post('/add_pet', pet);
	}
	editPet(id, updatedPet){
		return this._http.put('/edit/' + id, updatedPet);
	}
	getPet(id){
		return this._http.get('/retrieve/' + id);
	}
	deletePet(id){
		return this._http.delete('/delete/' + id);
	}
	addLike(id, updatedPet){
		return this._http.put('/like/' + id, updatedPet);
	}
	
}