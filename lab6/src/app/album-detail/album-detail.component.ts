import { Component, OnInit } from '@angular/core';
import { Albums} from "../modules";
import {HelpsFindInfoService} from "../helps-find-info.service";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ALBUMS} from "../fake-db";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  // @ts-ignore
  albumss: Albums;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private helpService: HelpsFindInfoService) {

  }

  ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.post = POSTS.find((x) => x.id === id);

    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      console.log(id);
      // @ts-ignore
      this.albumss = this.albumss.find((x) => x.id === id);
    });

    this.getPost();
  }

  getPost() {
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.loaded = false;
      this.helpService.getPost(id).subscribe((albumz) => {
        this.albumss = albumz;
        this.loaded = true;
      });
    });
  }

  updatePost() {
    this.loaded = false;
    this.helpService.updatePost(this.albumss).subscribe((albumz) => {
      console.log(albumz);
      this.loaded = true;
    });
  }


  goBack() {
    this.location.back();
  }

}
