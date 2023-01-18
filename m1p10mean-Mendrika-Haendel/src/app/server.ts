import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class Server {
  getUrl(): String {
    const url = `http://localhost:3000`;
    return url;
  }
}
