import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { EditPhotoComponent } from './components/edit-photo/edit-photo.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    PhotosComponent,
    AddPhotoComponent,
    EditPhotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
