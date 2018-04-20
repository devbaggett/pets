import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllpetsComponent } from './allpets/allpets.component';
import { AddpetComponent } from './addpet/addpet.component';
import { EditpetComponent } from './editpet/editpet.component';
import { PetdetailsComponent } from './petdetails/petdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
	{ path: 'allpets',component: AllpetsComponent },
	{ path: 'add_pet',component: AddpetComponent },
	{ path: 'edit_pet/:id',component: EditpetComponent },
	{ path: 'pet/:id',component: PetdetailsComponent },
	// use a colon and parameter name to include a parameter in the url
	// { path: 'gamma/:id', component: GammaComponent },
	{ path: '', pathMatch: 'full', redirectTo: '/allpets' },
	{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
