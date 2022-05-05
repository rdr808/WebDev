import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AlbumPhotos, Albums} from "./modules";

@Injectable({
  providedIn: 'root'
})
export class HelpsFindInfoService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private client: HttpClient) { }
  getPosts(): Observable<Albums[]> {
    return this.client.get<Albums[]>(`${this.BASE_URL}/albums`);
  }

  getPost(id: number): Observable<Albums> {
    return this.client.get<Albums>(`${this.BASE_URL}/albums/${id}`);
  }

  addPost(album: Albums): Observable<Albums> {
    // @ts-ignore
    return this.client.post(`${this.BASE_URL}/albums`, album);
  }

  updatePost(album: Albums): Observable<Albums> {
    return this.client.put<Albums>(`${this.BASE_URL}/albums/${album.id}`, album);
  }

  deletePost(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }
  getAlbum(id: number): Observable<Albums> {
    return this.client.get<Albums>(`${this.BASE_URL}/albums/${id}`);
  }
  getAlbumPhotos(id: number): Observable<AlbumPhotos[]> {
    return this.client.get<AlbumPhotos[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }

}
