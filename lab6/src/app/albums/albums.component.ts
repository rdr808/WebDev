import { Component, OnInit } from '@angular/core';
import { Albums} from "../modules";
import {HelpsFindInfoService} from "../helps-find-info.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albumss: Albums[];
  loaded: boolean = false;
  newPost: string;
  constructor(private helpService: HelpsFindInfoService) {
    this.albumss = [];
    this.newPost = '';
  }
  ngOnInit(): void {
    this.getAlbums();
  }
  getAlbums() {
    this.loaded = false;
    this.helpService.getPosts().subscribe((albumz) => {
      this.albumss = albumz;
      this.loaded = true;
    });
  }

  addPost() {
    const album = {
      title: this.newPost
    };
    this.loaded = false;
    this.helpService.addPost(album as Albums).subscribe((album) => {
      this.albumss.unshift(album);
      this.newPost = '';
      this.loaded = true;
    });
  }

  deletePost(id: number) {
    this.albumss = this.albumss.filter((x) => x.id !== id);
    this.helpService.deletePost(id).subscribe(() => {
      console.log('deleted', id);
    });
  }

}
