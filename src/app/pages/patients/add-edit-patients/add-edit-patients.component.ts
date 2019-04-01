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
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      dob: ["", [Validators.required]],
      pmf: ["", []],
      fmh: ["", []]
    });
  }

  ngOnInit() {}

  getForm() {
    return this.form;
  }
}
