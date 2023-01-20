import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Server } from "../server";
import { CarRepair } from '../models/car-repair';

@Injectable({
  providedIn: 'root'
})
export class CarRepairService {

  constructor(
    private httpClient: HttpClient,
    private server: Server
  ) { }

  insertCarRepair(carRepair: CarRepair): Observable<CarRepair> {
    const url = `${this.server.getUrl()}/carRepair/addCarRepair`;

    return this.httpClient.post<CarRepair>(url, carRepair);  
  }

}
