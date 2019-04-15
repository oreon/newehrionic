import { Component, OnInit } from "@angular/core";

import { Location } from "@angular/common";

import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NoteService } from "../../services/notes.service";
import { Router, ActivatedRoute } from "@angular/router";
import { BaseAddEditPage } from '../../base/base-add-edit-page';

@Component({
  selector: "app-add-note",
  templateUrl: "./add-note.page.html",
  styleUrls: ["./add-note.page.scss"]
})
export class AddNotePage extends BaseAddEditPage implements OnInit {
  
  hasView = false;

  constructor(
    protected formBuilder: FormBuilder,
    protected  service:NoteService,
    protected activatedRoute: ActivatedRoute,
    protected location: Location,
    protected router:Router
  ) {
    super(formBuilder, service, activatedRoute, location, router)
  }

  createForm(){
    this.form = this.formBuilder.group({
      description: ["", Validators.required]
    });
  }

  ngOnInit() {}
}
