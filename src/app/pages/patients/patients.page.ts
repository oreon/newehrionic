import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patients.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.page.html',
  styleUrls: ['./patients.page.scss'],
})
export class PatientsPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  //type: SearchType = SearchType.all;
 
  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */
  constructor(private patientService: PatientService) { }
 
  ngOnInit() { }
 
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.patientService.searchData(this.searchTerm);
  }

}
