import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { photo } from '../models/photo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
    'Content-Type': 'application/json'
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {
  url:string;
  photos:photo [] = [];
  id:number = 0;
  constructor(private http:HttpClient) { 
    this.url = "https://jsonplaceholder.typicode.com/photos";
  }

  getPhotos(id:number):Observable<photo []>{
    // console.log("Returning photos....");
    // if (id != this.id){
    //   console.log("Returning new....");
    //   console.log(`prev: ${this.id}  new ${id}`);
    //   this.id = id;
      return this.http.get<photo[]>(`${this.url}?albumId=${id}`);
    // }else{
    //   console.log("Returning old...")
    //   return this.photos;
    // }
    
  }

  updatePhoto(Photo:photo):Observable<any>{
    const url = `${this.url}/${Photo.id}`;
    return this.http.put(url, Photo, httpOptions);
  }

  deletePhoto(Photo:photo):Observable<photo>{
    const url = `${this.url}/${Photo.id}`;
    return this.http.delete<photo>(url, httpOptions);
  }
  addPhoto(Photo:photo):Observable<photo>{
    return this.http.post<photo>(this.url, Photo, httpOptions);
  }
  loadData(id:number):Observable<photo>{
    return this.http.get<photo>(`${this.url}/${id}`)
  }
  setData(photos:photo []){
    this.photos = photos;
    console.log(this.photos)
  }
  deleteLocal(id:number){
    this.photos = this.photos.filter(item=>item.id !=id );
  }
  addLocal(Photo:photo){
    console.log('adding local...');
    this.photos.unshift(Photo);
  }
  editLocal(Photo:photo){
    for (var i = 0; i < this.photos.length; i++){
      
      if (this.photos[i].id == Photo.id){
        this.photos[i].title = Photo.title;
        this.photos[i].url = Photo.url;   
      }
    }
  }
}
