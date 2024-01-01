import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MoviedetailsComponent } from './pages/moviedetails/moviedetails.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieApiServiceComponent } from './service/movie-api-service/movie-api-service.component';
import { ReactiveFormsModule } from '@angular/forms'; '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MoviedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MovieApiServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
