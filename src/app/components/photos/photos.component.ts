import { Component, OnInit } from '@angular/core';
import { photo } from '../../models/photo';
import { PhotoServiceService} from '../../services/photo-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos:photo [] = [];
  id:number = 0;
  constructor(private service:PhotoServiceService, private route:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || "0");
    this.service.getPhotos(this.id).subscribe(photos => {
      this.photos = photos;
      this.service.setData(this.photos);
    });
  }

  onDelete(Photo:photo){
    console.log("Ondelete");
    this.service.deletePhoto(Photo).subscribe( photo => {
      console.log(photo);
      this.photos = this.photos.filter(item=>item.id !=Photo.id );
      this.service.deleteLocal(Photo.id);
    });
  }

}
