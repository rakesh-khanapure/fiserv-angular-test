import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { DogBreed } from '../models/dog-breed.model';

@Injectable({
  providedIn: 'root'
})
export class DogsInformationService {

  private readonly baseUrl = ' https://dog.ceo/api';

  constructor(private http: HttpClient) { }

  getAllBreeds(): Observable<DogBreed[]>{
    const apiUrl = `${this.baseUrl}/breeds/list/all`;
    return this.http.get(apiUrl)
    .pipe(
      pluck('message'),
      map((result: any) => Object.entries(result).map(this.normalize))
    );
  }

  getDogImage(breed: string, region: string): Observable<string>{
    const apiUrl = `${this.baseUrl}/breed/${region}/${breed}/images/random`;
    return this.http.get(apiUrl)
    .pipe(pluck('message'));
  }


  private normalize(data: any): DogBreed {
    return {
      breed: data[0],
      regions: data[1]
    }
  }

}
