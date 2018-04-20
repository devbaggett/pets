import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})
export class EditpetComponent implements OnInit {
	editPet = {};

  	constructor(
	    private _route: ActivatedRoute,
	    private _router: Router,
	    private _httpService: HttpService) { }

  	ngOnInit() {
  		this._route.params.subscribe((params: Params) => {
  			let observable = this._httpService.getPet(params['id']);
  			observable.subscribe(data => {
  				console.log("Pet ready for edit!", data['pet'][0]);
  				this.editPet = data['pet'][0];
  			})
  		})
  	}
  	editPetFromId(id){
  		if (id){
  			let Observable = this._httpService.editPet(id, this.editPet);
  			Observable.subscribe(data => {
  				console.log("Pet successfully edited!", data['pet']);
  				this._router.navigate(['/pet/', id]);
  			})
  		}
  	}

}
