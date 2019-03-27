import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patients.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.page.html',
  styleUrls: ['./patient-details.page.scss'],
})
export class PatientDetailsPage implements OnInit {
  entity = null

  constructor(private activatedRoute: ActivatedRoute, 
    private patientService: PatientService) { }

    ngOnInit() {
      // Get the ID that was passed with the URL
      let id = this.activatedRoute.snapshot.paramMap.get('id');
   
      // Get the information from the API
      this.patientService.getDetails(id).subscribe(result => {
        this.entity = result;
      });
    }
   
    openWebsite() {
      window.open(this.entity.Website, '_blank');
    }

}
