import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Validators, FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ScriptService } from "../../services/scripts.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-add-script-item",
  templateUrl: "./add-script-item.page.html",
  styleUrls: ["./add-script-item.page.scss"]
})
export class AddScriptItemPage implements OnInit {
  public scriptItemForm: FormGroup;
  id: string = null;

  constructor(
    private fb: FormBuilder,
    protected activatedRoute: ActivatedRoute,
    protected scriptService: ScriptService,
    protected location: Location
  ) {
    //super();
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.createForm();
  }

  private createForm(): void {
    this.scriptItemForm = this.fb.group({
      drug: ["", [Validators.required]],
      frequency: ["", [Validators.required]],
      duration: ["", [Validators.required]]
      //ills: ["", [Validators.required]]
    });
  }

  delete(){
    this.scriptService.currentItem.scriptItems.splice(+this.id, 1)
    this.getForm().reset();
    this.location.back();
  }

  submit() {
    if (this.scriptItemForm.valid) {
      if (!this.id) 
      this.scriptService.currentItem.scriptItems.push(
        this.scriptItemForm.value
      );
      else {
        this.scriptService.currentItem.scriptItems[+this.id] = this.scriptItemForm.value
      }
      this.getForm().reset();
      this.location.back();
    }
  }

  ngOnInit() {
    if (this.id) {
      this.scriptItemForm.setValue(
        this.scriptService.currentItem.scriptItems[+this.id]
      );
    }
  }

  getForm() {
    return this.scriptItemForm;
  }
}
