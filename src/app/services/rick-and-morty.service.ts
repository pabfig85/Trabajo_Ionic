 import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  api_url = "https://rickandmortyapi.com/api";
  httpOptions: any;

  constructor(private http: HttpClient) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getAllCharacter() {
      return new Promise(resolve => {
        this.http.get(this.api_url + '/character', this.httpOptions).subscribe(res => {
        console.log(res);
        resolve(res);
        }, err => {
          console.log(err);
        })
        })
    }
  }
