import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-allpets',
  templateUrl: './allpets.component.html',
  styleUrls: ['./allpets.component.css']
})
export class AllpetsComponent implements OnInit {
	pets = [];

  	constructor(
  		private _route: ActivatedRoute,
    	private _router: Router,
    	private _httpService: HttpService) { }

 	ngOnInit() {
 	 	this.getPetsFromService();
  	}

  	getPetsFromService(){
    	let observable = this._httpService.getPets();
    	observable.subscribe(data => {
    		console.log("Got our pets!", data);
    		this.pets = data['pets'];
    	});
    }
    // deleteAuthorFromService(id){
    //   let observable = this._httpService.deleteAuthor(id);
    //   observable.subscribe(data => {
    //     console.log("Deleted author!", data);
    //   })
    // }

}
