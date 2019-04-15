import { Component, OnInit } from "@angular/core";
import { PatientService } from "../../../services/patients.service";
import { Observable } from "rxjs";
import { BaseListPage } from "../../../base/base-list-page";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-patients",
  templateUrl: "./patients.page.html",
  styleUrls: ["./patients.page.scss"]
})
export class PatientsPage extends BaseListPage<Patient> implements OnInit {
  results: Observable<any>;
  searchTerm: string = "";
  searchOnserver = true;
  //type: SearchType = SearchType.all;

  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */
  constructor(
    protected patientService: PatientService,
    protected activatedRoute: ActivatedRoute
  ) {
    super(patientService, activatedRoute);
  }

  //ngOnInit() {} 

  // searchChanged() {
  //   // Call our service function which returns an Observable
  //   this.results = this.patientService.searchData(this.searchTerm);
  // }
}
