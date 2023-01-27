import { getNumberOfCurrencyDigits } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CarDepot } from "src/app/models/car-depot";
import { CarProblem } from "src/app/models/car-problem";
import { CarRepair } from "src/app/models/car-repair";
import { ContentMail } from "src/app/models/content-mail";
import { Invoice } from "src/app/models/invoice";
import { Users } from "src/app/models/users";
import { AuthentificationService } from "src/app/services/authentification.service";
import { CarDepotService } from "src/app/services/car-depot.service";
import { CarRepairService } from "src/app/services/car-repair.service";
import { InvoiceService } from "src/app/services/invoice.service";

@Component({
  selector: "app-form-diagnostic",
  templateUrl: "./form-diagnostic.component.html",
  styleUrls: ["./form-diagnostic.component.css"],
})
export class FormDiagnosticComponent implements OnInit {
  carProblem = {
    carProblems: [
      {
        entitled: "",
        price: "",
        status: "EnCours",
        progress: 0,
      },
    ],
  };

  formule: FormGroup = this.formBuilder.group({
    carProblems: this.buildCarProblem(this.carProblem.carProblems),
  });

  message!: string;

  constructor(
    private route: ActivatedRoute,
    private cardepotservice: CarDepotService,
    private formBuilder: FormBuilder,
    private invoiceservice: InvoiceService,
    private carepairservice: CarRepairService,
    private authservice: AuthentificationService,
    private router: Router
  ) {}

  carDiag!: CarDepot;

  voitureRepair!: CarRepair;
  invoice!: Invoice;
  pb!: CarProblem[];
  me!: Users;
  contentMail!: ContentMail;

  matricule = this.route.snapshot.paramMap.get("matricule");

  getCarDepotByMatricule() {
    this.cardepotservice.getCarDepotByMatricule(this.matricule).subscribe({
      next: (data) => {
        this.carDiag = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  userme() {
    this.authservice.userconnecte().subscribe({
      next: (data) => {
        this.me = data;
      },
      error: (e) => {
        console.log(e.error);
      },
    });
  }

  ngOnInit(): void {
    this.userme(), this.getCarDepotByMatricule();
  }

  buildCarProblem(
    carProblems: {
      entitled: string;
      price: string;
      status: string;
      progress: number;
    }[] = []
  ) {
    return this.formBuilder.array(
      carProblems.map((carp) => this.formBuilder.group(carp))
    );
  }

  get carProblems(): FormArray {
    return this.formule.get("carProblems") as FormArray;
  }

  addCarPRoblem() {
    this.carProblems.push(
      this.formBuilder.group({
        entitled: null,
        price: null,
        status: "EnCours",
        progress: 0,
      })
    );
  }

  removeCarProblem(index: number) {
    if (this.carProblems.length > 1) this.carProblems.removeAt(index);
    else
      this.carProblems.patchValue([
        {
          entitled: null,
          price: null,
          status: "EnCours",
          progress: 0,
        },
      ]);
  }

  getAmount(values: any) {
    var total = 0;
    for (var i = 0; i < values.carProblems.length; i++) {
      total += values.carProblems[i].price;
    }

    return total;
  }

  submit(value: any): void {
    this.pb = value.carProblems;

    var vdiag = {
      clientName: this.carDiag.clientName,
      clientSurname: this.carDiag.clientSurname,
      clientContact: this.carDiag.clientContact,
      clientEmail: this.carDiag.clientEmail,
      carMark: this.carDiag.carMark,
      carModel: this.carDiag.carModel,
      numberPlate: this.carDiag.numberPlate,
      color: this.carDiag.color,
      carProblem: this.pb,
      status: "EnAttente",
      amount: this.getAmount(value),
      globalProgress: 0,
      garageName: this.carDiag.garageName,
      garageLocation: this.carDiag.garageLocation,
      userName: this.me.name,
      userSurname: this.me.surname,
      userContact: this.me.numberPhone,
      dateTimeStart: null,
      dateTimeStop: null,
      duration: null,
      invoiceStatus: "NonPayer",
      carDepotStatus: "diagnostiquer",
    };

    this.voitureRepair = vdiag;

    this.carepairservice.insertCarRepair(this.voitureRepair).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      },
    });

    var devis = {
      clientName: this.carDiag.clientName,
      clientSurname: this.carDiag.clientSurname,
      clientContact: this.carDiag.clientContact,
      clientEmail: this.carDiag.clientEmail,
      carMark: this.carDiag.carMark,
      carModel: this.carDiag.carModel,
      numberPlate: this.carDiag.numberPlate,
      color: this.carDiag.color,
      carProblem: this.pb,
      status: "NonPayer",
      amount: this.getAmount(value),
      garageName: this.carDiag.garageName,
      garageLocation: this.carDiag.garageLocation,
      userName: this.me.name,
      userSurname: this.me.surname,
      userContact: this.me.numberPhone,
    };

    this.invoice = devis;

    this.invoiceservice.insertInvoice(this.invoice).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      },
    });

    var mail = {
      to: this.carDiag.clientEmail,
      subject: "Devis de réparation",
      text: `Marque du vehicule : ${
        this.carDiag.carMark
      }.<br>Matricule du vehicule : ${this.carDiag.numberPlate}.
      <br>Model du vehicule : ${
        this.carDiag.carModel
      }.<br>Couleur du vehicule : ${this.carDiag.color}.<br>
      Garage :${this.carDiag.garageName} à ${this.carDiag.garageLocation}
      <br>
      Montant total de la réparation : ${this.getAmount(value).toLocaleString(
        "en-GB"
      )} Ar.<br>`,
    };
    this.contentMail = mail;
    this.invoiceservice.sendEmail(this.contentMail).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      },
    });

    this.cardepotservice.updateStatusCarDepot(this.matricule).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      },
    });

    this.message = "Diagnostic enregistré";

    // this.router.navigate(['devis-diagnostique']);
  }
}
