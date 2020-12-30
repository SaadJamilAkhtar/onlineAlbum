import { Component, OnInit } from '@angular/core';
import { album } from '../../models/album'
import { AlbumServiceService } from '../../services/album-service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums:album[] = [];


  constructor(private service:AlbumServiceService) { 
  }

  ngOnInit(): void {
    this.service.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }

}
