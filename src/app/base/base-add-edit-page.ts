import { Component, OnInit } from "@angular/core";
//import { ScriptService } from '../../services/scripts.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Route, Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import * as _ from "lodash";
import { BaseService } from './baseservice';
import { Observable, of } from 'rxjs';

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
        x => { 
          //x = _.omit(x, ['id']);
          console.log(this.form.controls)
          _.keys(this.form.controls).forEach(key => {
            this.form.get(key).setValue(x[key])
          });
          
      }
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

  op (x) :Observable<any> {return of();}

  submit() {
    this.submitted = true;

    if (!this.form.valid) return;

  
    _.assign(this.service.currentItem, this.form.value);

    this.service.currentItem = this.preprocess(this.service.currentItem)

  //  this.op = this.id ? this.service.update :this.service.add;
  //   //console.log(op)
  //   this.op.bind(this)
    if(this.id)
      this.service.update(this.service.currentItem).subscribe(x => this.addEditSuccess(x) );
    else   
      this.service.add(this.service.currentItem).subscribe(x => this.addEditSuccess(x) );
  }
  addEditSuccess(x){
    
    this.location.back();
    if(this.id)
      this.service.resetCurrent();
  }

  preprocess(x){
    return x;
  }

  ngOnInit() {}

  getEntity() {
    return this.service.currentItem;
  }
}
