import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Server } from "../server";
import { Observable } from "rxjs";
import { CarRepair } from "../models/car-repair";

@Injectable({
  providedIn: "root",
})
export class HistoryRepairService {
  constructor(private httpClient: HttpClient, private server: Server) {}

  getAllCarRepair(
    status: string,
    nameClient: string | null,
    surnameClient: string | null
  ): Observable<CarRepair[]> {
    const url = `${this.server.getUrl()}/carRepair/carRepairStatusClient/${status}/${nameClient}/${surnameClient}`;

    return this.httpClient.get<CarRepair[]>(url);
  }
}
