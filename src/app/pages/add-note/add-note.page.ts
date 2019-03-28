import { Component, OnInit } from "@angular/core";

import { Location } from '@angular/common';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NoteService } from '../../services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-add-note",
  templateUrl: "./add-note.page.html",
  styleUrls: ["./add-note.page.scss"]
})
export class AddNotePage implements OnInit {
  public formGroup: FormGroup;

  constructor(public formBuilder: FormBuilder, 
    public noteService:NoteService,
  public router:Router,
  private location: Location
) {
    this.formGroup = formBuilder.group({
      description: ["", Validators.required],
    });
  }

  submit() {
    console.log("what is goin on");
    console.log(this.formGroup.value);
    this.noteService.add(this.formGroup.value).subscribe(
      x => this.location.back()
    )
    
    //this.router.navigateByUrl("/referring-physician");
  }

  ngOnInit(){

  }
}
