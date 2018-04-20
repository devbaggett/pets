import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-petdetails',
  templateUrl: './petdetails.component.html',
  styleUrls: ['./petdetails.component.css']
})
export class PetdetailsComponent implements OnInit {
	pet = {};
	like_enabled = true;
	likes: Number;

  	constructor(
	    private _route: ActivatedRoute,
	    private _router: Router,
	    private _httpService: HttpService) { }

 	ngOnInit() {
 	 	this._route.params.subscribe((params: Params) => {
  			let observable = this._httpService.getPet(params['id']);
  			observable.subscribe(data => {
  				console.log("Pet details view", data['pet'][0]);
  				this.pet = data['pet'][0];
  			})
  		})
  	}
  	addLikeFromService(id){
  		if (this.like_enabled == true){
  			let Observable = this._httpService.addLike(id, this.pet);
  			Observable.subscribe(data => {
  				console.log("Pet successfully liked!", data);
  				this.like_enabled = false;
  				this.pet['likes'] += 1;
  			})
  		}
  	}
  	deletePetFromService(id){
      let observable = this._httpService.deletePet(id);
      observable.subscribe(data => {
        console.log("Adopted pet!", data);
        this._router.navigate(['/allpets']);
      })
    }

}
