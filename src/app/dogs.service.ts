import { Injectable } from '@angular/core';
import{Messa} from './message';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {


  constructor(private http: HttpClient) { }

  private urldog= 'https://dog.ceo/api/breeds/image/random'

  msDog(): Observable<Messa>{
    return this.http.get<Messa>(this.urldog)
  }
}
