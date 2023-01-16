import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Garage } from '../models/garage';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  constructor(private httpClient: HttpClient) { }

  getGarages(): Observable<Garage[]> {
    const url = "http://localhost:3000/garage/allGarage";

    return this.httpClient.get<Garage[]>(url);
  }
}
