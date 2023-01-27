import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Server } from "../server";
import { Invoice } from "../models/invoice";
import { ContentMail } from "../models/content-mail";
import { ChiffreAffaireJour } from "../models/chiffre-affaire-jour";
import { ChiffreAffaireMois } from "../models/chiffre-affaire-mois";

@Injectable({
  providedIn: "root",
})
export class InvoiceService {
  constructor(private httpClient: HttpClient, private server: Server) {}

  updateCarRepairStatusInvoiceAndStatusCarDepotAndStatusCarRepair(
    numberPlate: string | null,
    invoiceStatus: string | null,
    carDepotStatus: string | null,
    updateCarDepotStatus: string | null,
    updateInvoiceStatus: string | null
  ): Observable<any> {
    const url = `${this.server.getUrl()}/carRepair/updateCarRepairInvoiceAndStatusCarDepotAndStatusCarRepair`;
    var body = {
      numberPlate: numberPlate,
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

  insertInvoice(invoice: Invoice): Observable<Invoice> {
    const url = `${this.server.getUrl()}/invoice/addInvoice`;

    return this.httpClient.post<Invoice>(url, invoice);
  }

  findInvoiceByClient(
    clientName: string,
    clientSurname: string
  ): Observable<Invoice[]> {
    const url =
      `${this.server.getUrl()}/invoice/findInvoiceByClient/` +
      clientName +
      `/` +
      clientSurname;

    return this.httpClient.get<Invoice[]>(url);
  }
  sendEmail(contentMail: ContentMail): Observable<ContentMail> {
    const url = `${this.server.getUrl()}/sendMail`;
    return this.httpClient.post<ContentMail>(url, contentMail);
  }

  invoiceByMatriculeAndStatus(
    numberPlate: string | null,
    status: string | null
  ): Observable<Invoice> {
    const url =
      `${this.server.getUrl()}/invoice/InvoiceByMatriculeAndStatus/` +
      numberPlate +
      `/` +
      status;

    return this.httpClient.get<Invoice>(url);
  }

  findInvoiceByUserAndGarage(
    garageName: string | null,
    garageLocation: string | null,
    userName: string,
    userSurname: string
  ): Observable<Invoice[]> {
    const url =
      `${this.server.getUrl()}/invoice/findInvoiceByUserAndGarage/` +
      garageName +
      `/` +
      garageLocation +
      `/` +
      userName +
      `/` +
      userSurname;

    return this.httpClient.get<Invoice[]>(url);
  }

  findInvoiceByGarage(
    garageName: string | null,
    garageLocation: string | null
  ): Observable<Invoice[]> {
    const url =
      `${this.server.getUrl()}/invoice/findInvoiceByGarage/` +
      garageName +
      `/` +
      garageLocation;

    return this.httpClient.get<Invoice[]>(url);
  }

  getChiffreAffaireJour(
    garageName: string | null,
    garageLocation: string | null,
    dateChoisi: string
  ): Observable<ChiffreAffaireJour[]>
  {
  const url = `${this.server.getUrl()}/invoice/chiffreaffairejour/`+dateChoisi+`/`+garageName+`/`+garageLocation;

  return this.httpClient.get<ChiffreAffaireJour[]>(url);  
  }

  getChiffreAffaireMois(
    garageName: string | null,
    garageLocation: string | null,
    mois: string,
    annee: string
  ): Observable<ChiffreAffaireMois[]> {
    const url = `${this.server.getUrl()}/invoice/chiffreaffairemois/`+mois+`/`+annee+`/`+garageName+`/`+garageLocation;

  return this.httpClient.get<ChiffreAffaireMois[]>(url);
  }
}
