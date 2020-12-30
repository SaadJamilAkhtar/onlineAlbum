import { Injectable } from '@angular/core';
import { album } from '../models/album'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {
  url:string;
  constructor(private http:HttpClient) { 
    this.url = 'https://jsonplaceholder.typicode.com/albums';
  }

  getAlbums():Observable<album[]>{
    return this.http.get<album[]>(this.url);
    
  }
}
