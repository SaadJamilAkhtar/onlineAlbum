import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { EditPhotoComponent } from './components/edit-photo/edit-photo.component';
const routes: Routes = [
  { path: '', component: AlbumsComponent },
  { path: 'photos/:id', component: PhotosComponent },
  { path: 'photos/edit/:id', component: EditPhotoComponent },
  { path: 'photos/add/:id', component: AddPhotoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
