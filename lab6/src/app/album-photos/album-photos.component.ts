import { Component, OnInit } from '@angular/core';
import { Albums} from "../modules";
import {HelpsFindInfoService} from "../helps-find-info.service";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ALBUMS} from "../fake-db";
import {AlbumPhotos} from "../modules";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  albumss!: Albums;
  photos!: AlbumPhotos[];
  loaded: boolean = true;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private helpService: HelpsFindInfoService) {

  }

  ngOnInit(): void {
    this.getAlbum();
    this.getPhotos();
  }
  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.helpService.getAlbum(id).subscribe((albumas) => {
        this.albumss = albumas;
      });
    });
  }

  getPhotos() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.helpService.getAlbumPhotos(id).subscribe((photos) => {
        this.photos = photos;
        this.loaded = true;
      });
    });
  }
  goBack() {
    this.location.back();
  }

}
