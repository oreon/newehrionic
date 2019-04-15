import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../services/scripts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BaseAddEditPage } from '../../base/base-add-edit-page';
   

@Component({
  selector: 'app-add-script',
  templateUrl: './add-script.page.html',
  styleUrls: ['./add-script.page.scss'],
})
export class AddScriptPage extends BaseAddEditPage implements OnInit {


  constructor(
    protected formBuilder: FormBuilder,
    protected  service:ScriptService,
    protected activatedRoute: ActivatedRoute,
    protected location: Location,
    protected router:Router
  ) {
    super(formBuilder, service, activatedRoute, location, router)
  }

  createForm(){
    this.form = this.formBuilder.group({
      notes: ["", '']
    });
  }

  ngOnInit(){}

}
