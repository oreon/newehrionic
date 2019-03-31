import { Component, OnInit } from "@angular/core";
//import { ScriptService } from '../../services/scripts.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Route, Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import * as _ from "lodash";

export abstract class BaseAddEditPage {
  public form: FormGroup;

  constructor(
    protected formBuilder: FormBuilder,
    protected service: any,
    protected activatedRoute: ActivatedRoute,
    protected location: Location
  ) {
    this.createForm();
  }

  abstract createForm();

  submitAttempt = false;

  submit() {
    this.submitAttempt = true;

    if (!this.form.valid) return;

    _.assign(this.service.currentItem, this.form.value);

    this.service.add(this.service.currentItem).subscribe(x => {
      this.location.back();
      this.service.resetCurrent();
    });
  }

  ngOnInit() {}

  getEntity() {
    return this.service.currentItem;
  }
}
