

import { Component, OnInit } from "@angular/core";

import { Location } from "@angular/common";

import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ChronicConditionService } from "../chronicCondition.service";
import { Router, ActivatedRoute } from "@angular/router";
import { BaseAddEditPage } from '../../../base/base-add-edit-page';









@Component({
selector: 'app-chronicCondition-add',
templateUrl: './chronicCondition-add.component.html',
styleUrls: ['./chronicCondition-add.component.scss']
})
export class ChronicConditionAddComponent  extends  BaseAddEditPage implements OnInit {


    constructor(
        protected formBuilder: FormBuilder,
        protected service: ChronicConditionService,
        protected activatedRoute: ActivatedRoute,
        protected location: Location,
        protected router: Router
    ) {
        super(formBuilder, service, activatedRoute, location, router);
    }



    createForm(): void {
        this.form = this.formBuilder.group({
        name : ['', [   Validators.required,  ]],

        });
    }



    ngOnInit() {

    }

    getForm  () { return this.form };


}

