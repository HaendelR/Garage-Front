import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-contactuspage",
  templateUrl: "contactus.component.html"
})
export class ContactUspageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("contactus-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("contactus-page");
  }
}
