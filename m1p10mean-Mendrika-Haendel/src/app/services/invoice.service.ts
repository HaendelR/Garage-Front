import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Server } from "../server";
import { Invoice } from '../models/invoice';
import { ContentMail } from '../models/content-mail';

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
  sendEmail(contentMail: ContentMail):Observable<ContentMail>  {
    const url = `${this.server.getUrl()}/sendMail`;
    return this.httpClient.post<ContentMail>(url, contentMail);
  }
}
