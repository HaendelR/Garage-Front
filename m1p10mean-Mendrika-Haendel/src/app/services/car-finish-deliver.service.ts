import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Server } from "../server";
import { Observable } from "rxjs";
import { CarRepair } from "../models/car-repair";

@Injectable({
  providedIn: "root",
})
export class CarFinishDeliverService {
  constructor(private httpClient: HttpClient, private server: Server) {}

  getCarRepair(
    status: string,
    name: string | null,
    surname: string | null,
    invoiceStatus: string | null,
    carDepotStatus: string | null
  ): Observable<CarRepair[]> {
    const url = `${this.server.getUrl()}/carRepair/carRepairStatusInvoiceAndStatusCarDepotAndStatusCarRepairAndClient/${invoiceStatus}/${carDepotStatus}/${status}/${name}/${surname}`;

    return this.httpClient.get<CarRepair[]>(url);
  }

  updateCarRepairStatusInvoiceAndStatusCarDepotAndStatusCarRepair(
    numberPlate: string | null,
    status: string | null,
    invoiceStatus: string | null,
    carDepotStatus: string | null,
    updateInvoiceStatus: string | null,
    updateCarDepotStatus: string | null
  ): Observable<any> {
    const url = `${this.server.getUrl()}/carRepair/updateCarRepairStatusInvoiceAndStatusCarDepotAndStatusCarRepair`;
    var body = {
      numberPlate: numberPlate,
      status: status,
      invoiceStatus: invoiceStatus,
      carDepotStatus: carDepotStatus,
      updateInvoiceStatus: updateInvoiceStatus,
      updateCarDepotStatus: updateCarDepotStatus,
    };
    return this.httpClient.put<any>(url, body);
  }

  updateInvoiceStatusNumberPlate(
    numberPlate: string | null,
    status: string | null,
    updateInvoiceStatus: string | null
  ): Observable<any> {
    const url = `${this.server.getUrl()}/invoice/updateInvoiceStatusNumberPlate`;
    var body = {
      numberPlate: numberPlate,
      status: status,
      updateInvoiceStatus: updateInvoiceStatus,
    };
    return this.httpClient.put<any>(url, body);
  }

  updateStatusCarDepot(
    matricule: string | null,
    currentStatus: string | null,
    status: string | null
  ): Observable<any> {
    const url = `${this.server.getUrl()}/carDepot/updateStatusCarDepot`;
    var depot = {
      numberPlate: matricule,
      currentStatus: currentStatus,
      status: status,
    };

    return this.httpClient.put<any>(url, depot);
  }
}
