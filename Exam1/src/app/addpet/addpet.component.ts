import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {
	pet = {};

  	constructor(
  		private _httpService: HttpService,
	    private _route: ActivatedRoute,
	    private _router: Router){}

  ngOnInit() {
  }

  addPetFromService(){
		let observable = this._httpService.addPet(this.pet);
		observable.subscribe(data => {
			console.log("Added pet!", data);
			this._router.navigate(['/allpets']);
		})
    }

    goHome(){
  		this._router.navigate(['/home']);
  	}

}
