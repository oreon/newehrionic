import { Component, OnInit } from "@angular/core";
import { BaseAddEditPage } from "../../base/base-add-edit-page";
import { FormBuilder, Validators } from "@angular/forms";
import { MeasurementService } from "../../services/measurement.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { MeasurementTypeService } from '../../services/measurement-type.service';

@Component({
  selector: "app-add-measurement",
  templateUrl: "./add-measurement.page.html",
  styleUrls: ["./add-measurement.page.scss"]
})
export class AddMeasurementPage extends BaseAddEditPage implements OnInit {
  measurementTypes$:any
  constructor(
    protected formBuilder: FormBuilder,
    protected service: MeasurementService,
    protected activatedRoute: ActivatedRoute,
    protected location: Location,
    protected measurementTypeService:MeasurementTypeService
  ) {
    super(formBuilder, service, activatedRoute, location);
    this.measurementTypes$ = 
      this.measurementTypeService.getAll(1)
  }

  createForm() {
    this.form = this.formBuilder.group({
      value: ["", [Validators.required]],
      measurementType: ["", [Validators.required]],
      //patient: ["", [Validators.required]]
    });
  }

  ngOnInit() {}
}
