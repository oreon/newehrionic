import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { BaseService } from '../base/baseservice';

import { MessageService } from '../base/message-service';
import { getUrl } from '@ionic/angular/dist/directives/navigation/stack-utils';
import { PatientService } from './patients.service';
import { Script } from '../entities/script.model';


@Injectable({
  providedIn: 'root'
})
export class ScriptService  extends BaseService<Script>{
  
  readonly parentEndpoint = 'patients'
  readonly endpoint = 'scripts'

  getFetchAllUrl(filter): string {
    return `${this.url}/${this.parentEndpoint}/${filter}/${this.endpoint}`
  }
  
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(protected http: HttpClient, 
    protected messageService:MessageService,
    protected patientService:PatientService
  ) { 
      super(http, messageService)
  }
 
  add(note){
    note.patient = this.patientService.current.id;
    note.author = 1
    console.log(note)
    return super.add(note)
  }

  
}
