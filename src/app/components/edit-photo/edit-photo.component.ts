import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from '../../services/photo-service.service';
import { photo } from '../../models/photo';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.css']
})
export class EditPhotoComponent implements OnInit {
  title:string = "";
  url:string = "";
  id:number = 0;
  photo:photo = new photo();
  constructor(private service:PhotoServiceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  this.id = parseInt(this.route.snapshot.paramMap.get('id') || "0");
  this.service.loadData(this.id).subscribe( Photo => {
    this.photo = Photo;
    this.url = Photo.url;
    this.title = Photo.title;
  });
  }
  
  onSubmit() {
    this.photo.url = this.url;
    this.photo.title = this.title;
    this.photo.thumbnailUrl = this.url;
    this.service.updatePhoto(this.photo).subscribe( photo => {
      console.log(photo);
      this.service.editLocal(this.photo);
    } );
    this.router.navigate(['/photos', this.photo.albumId]);
  }
}
