import { Component, OnInit } from "@angular/core";

import { Location } from "@angular/common";

import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { PatientService } from "../../../services/patients.service";
import { Router, ActivatedRoute } from "@angular/router";
import { BaseAddEditPage } from "../../../base/base-add-edit-page";

@Component({
  selector: "app-patient-add",
  templateUrl: "./add-edit-patients.component.html",
  styleUrls: ["./add-edit-patients.component.scss"]
})
export class AddEditPatientComponent extends BaseAddEditPage implements OnInit {
  //public patientForm: FormGroup;

  constructor(
    protected formBuilder: FormBuilder,
    protected service: PatientService,
    protected activatedRoute: ActivatedRoute,
    protected location: Location
  ) {
    super(formBuilder, service, activatedRoute, location);
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      birthday: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      medicalHistory: ["", []],
      familyHistory: ["", []]
    });
  }

  ngOnInit() {}

  getForm() {
    return this.form;
  }

  preprocess(x){
    x.birthday = x.birthday.split('T')[0]
    return x;
  }
}
