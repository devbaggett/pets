import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AllpetsComponent } from './allpets/allpets.component';
import { AddpetComponent } from './addpet/addpet.component';
import { PetdetailsComponent } from './petdetails/petdetails.component';
import { EditpetComponent } from './editpet/editpet.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    AllpetsComponent,
    AddpetComponent,
    PetdetailsComponent,
    EditpetComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
