import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarDepot } from 'src/app/models/car-depot';
import { CarDepotService } from 'src/app/services/car-depot.service';

@Component({
  selector: 'app-form-diagnostic',
  templateUrl: './form-diagnostic.component.html',
  styleUrls: ['./form-diagnostic.component.css']
})
export class FormDiagnosticComponent implements OnInit {

  carProblem = {
    carProblems: [{entitled: "", price: "", status: "en cours"}]
  }

  formule: FormGroup = this.formBuilder.group({
    carProblems: this.buildCarProblem(this.carProblem.carProblems)
  });

  constructor(
    private route: ActivatedRoute,
    private cardepotservice: CarDepotService,
    private formBuilder: FormBuilder
  ) { }

  carDiag!: CarDepot;

  matricule=this.route.snapshot.paramMap.get('matricule');

  getCarDepotByMatricule() {
    this.cardepotservice.getCarDepotByMatricule(this.matricule)
    .subscribe({
      next: data => {
        this.carDiag = data;
      },
      error: e => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getCarDepotByMatricule()
  }

  buildCarProblem(carProblems: {entitled: string, price: string, status: string}[] = []) {
    return this.formBuilder.array(carProblems.map(carp => this.formBuilder.group(carp)));
  }

  get carProblems(): FormArray {
    return this.formule.get('carProblems') as FormArray;
  }

  async addCarPRoblem() {
    this.carProblems.push(this.formBuilder.group({entitled: null, price: null, status: "en cours"}))
  }

  async removeCarProblem(index: number) {
    if(this.carProblems.length > 1) this.carProblems.removeAt(index);
    else this.carProblems.patchValue([{entitled: null, price: null, status: "en cours"}]);
  }

  submit(value: any): void {
    console.log(value);
  }

}
