import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

interface iLand {
  _id: string,
  address: string,
  image: string,
  contact: string,
  entered: Date
}

@Injectable({
  providedIn: 'root'
})



export class LupainService {

  constructor(private http: HttpClient) {}

  getLand(url: string) {
    return this.http.get(url);
  }
}