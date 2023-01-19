import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Server } from "../server";
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(
    private httpClient: HttpClient,
    private server: Server
  ) { }

  insertInvoice(invoice: Invoice):Observable<Invoice>  {
    const url = `${this.server.getUrl()}/invoice/addInvoice`;

    return this.httpClient.post<Invoice>(url, invoice);
  }

  findInvoiceByClient(clientName: string, clientSurname: string): Observable<Invoice[]> {
    const url = `${this.server.getUrl()}/invoice/findInvoiceByClient/`+clientName+`/`+clientSurname;

    return this.httpClient.get<Invoice[]>(url);
  }
}
