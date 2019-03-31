import { Injectable } from '@angular/core';
import { MessageService } from '../base/message-service';
import { BaseService } from '../base/baseservice';
import { HttpClient } from '@angular/common/http';
import { Measurement } from '../entities/measurmenet/measurement.model';
import { PatientService } from './patients.service';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService extends BaseService<Measurement>{
  
  readonly endpoint = 'measurements'
  readonly parentEndpoint = 'patients'
  

  getFetchAllUrl(filter): string {
    return `${this.url}/${this.parentEndpoint}/${filter}/${this.endpoint}`
  }
  
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(protected http: HttpClient, 
    protected messageService:MessageService,
    protected patientService:PatientService) { 
      super(http, messageService)
    }

  add(measurement){
    measurement.patient = this.patientService.current.id
    //measurement.
    return super.add(measurement)
  }

}
