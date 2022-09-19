import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home.component';
import { SearchComponent } from './components/search/search.component';
import { DisplayComponent } from './components/display/display.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { GifDetailComponent } from './components/gif-detail/gif-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule
  ],
  declarations: [
     HomeComponent,
     SearchComponent,
     DisplayComponent,
     SearchResultComponent,
     GifDetailComponent
    ],
  exports: [HomeComponent]
})
export class HomeModule { }
