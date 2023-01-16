import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  insertCar(car: Car): Observable<Car> {
    const urlcar= "http://localhost:3000/car/addCar";

    return this.httpClient.post<Car>(urlcar, car);
  }
}
