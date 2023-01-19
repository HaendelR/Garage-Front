import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Car } from "../models/car";
import { Observable } from "rxjs";
import { Server } from "../server";

@Injectable({
  providedIn: "root",
})
export class CarService {
  constructor(private httpClient: HttpClient, private server: Server) {}

  insertCar(car: Car): Observable<Car> {
    const urlcar = `${this.server.getUrl()}/car/addCar`;

    return this.httpClient.post<Car>(urlcar, car);
  }

  findCar(numberPlate: string): Observable<Car> {
    const url = `${this.server.getUrl()}/car/findCar/`+numberPlate;

    return this.httpClient.get<Car>(url);
  }
}
