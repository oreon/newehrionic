import { Component, OnInit } from "@angular/core";
//import { ScriptService } from '../../services/scripts.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Route, Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import * as _ from "lodash";
import { BaseService } from './baseservice';

export abstract class BaseAddEditPage {
  public form: FormGroup;
  id:string = null

  constructor(
    protected formBuilder: FormBuilder,
    protected service: any , //BaseService<T>,
    protected activatedRoute: ActivatedRoute,
    protected location: Location
  ) {
    this.createForm();
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.id){
      this.service.get(+this.id).subscribe(
        x => this.form.setValue(x)
      )
    }
  }

  abstract createForm();

  submitted = false;

  form2Entity() {
    //_.assign(this.entity, this.getForm().value);
  }

  // submit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.getForm().invalid) {
  //     return;
  //   }
  //   console.log(this.getForm().value);
  //   this.form2Entity();
  //   this.formSubmitted.emit(this.entity);
  //   this.stepComplete.emit(this.entity);
  // }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;

    if (!this.form.valid) return;

    _.assign(this.service.currentItem, this.form.value);

    let op = this.id ? this.service.update :this.service.add;
    console.log(op)

    op(this.service.currentItem).subscribe(x => {
      this.location.back();
      this.service.resetCurrent();
    });
  }

  ngOnInit() {}

  getEntity() {
    return this.service.currentItem;
  }
}
