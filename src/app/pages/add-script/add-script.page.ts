import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../services/scripts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';

import * as _ from 'lodash';    

@Component({
  selector: 'app-add-script',
  templateUrl: './add-script.page.html',
  styleUrls: ['./add-script.page.scss'],
})
export class AddScriptPage implements OnInit {

  public formGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    protected  service:ScriptService,
    protected router: Router,
    private location: Location
  ) {
    this.formGroup = formBuilder.group({
      notes: ["", '']
    });
  }

  submitAttempt = false;

  submit() {
    this.submitAttempt = true;

    if (!this.formGroup.valid) return;

    _.assign(this.service.currentItem, this.formGroup.value);
   
    this.service
      .add(this.service.currentItem)
      .subscribe(x => {
        this.location.back()
        this.service.resetCurrent();
      });
  }

  ngOnInit() {}

  getEntity(){
    return this.service.currentItem;
  }

}
