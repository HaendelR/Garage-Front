import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CarDepot } from "../../../models/CarDepot/CarDepot.model";

@Injectable({
  providedIn: "root",
})
export class ReceptionCarService {
  constructor(private httpClient: HttpClient) {}
  getAllCar(): Observable<CarDepot[]> {
    const url = "http://localhost:3000/carDepot/allCarDepot";
    return this.httpClient.get<CarDepot[]>(url);
  }
}
