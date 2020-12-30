import { Component, OnInit } from '@angular/core';
import { photo } from '../../models/photo';
import { PhotoServiceService } from '../../services/photo-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  title:string  = '';
  url:string = '';
  id:number = 0;
  errors:string [] = [];

  constructor(private service:PhotoServiceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || "0");

  }

  onSubmit(){
    this.errors = [];
    if(!this.title){
      this.errors.push("Title missing..");
    }
    if(!this.url){
      this.errors.push("Url missing..");
    }else{if (this.url.indexOf("/") == -1){
      this.errors.push("Incorrect url entered..");
    }
  }
    if(this.errors.length == 0){
    const photo:photo = {
      id:0,
      albumId:this.id,
      title:this.title,
      url:this.url,
      thumbnailUrl:this.url
    }
    this.service.addPhoto(photo).subscribe( photo => {
      console.log(photo);
      this.service.addLocal(photo);
    });
    this.router.navigate(['/photos', this.id]);
  }
}

}
