import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { BaseService } from '../base/baseservice';
import { Note } from '../entities/note';
import { MessageService } from '../base/message-service';
import { getUrl } from '@ionic/angular/dist/directives/navigation/stack-utils';
import { PatientService } from './patients.service';



@Injectable({
  providedIn: 'root'
})
export class NoteService  extends BaseService<Note>{
  
  readonly parentEndpoint = 'patients'
  readonly endpoint = 'notes'

  getFetchAllUrl(filter): string {
    const ep = `${this.url}/${this.parentEndpoint}/${filter}/${this.endpoint}`
    return ep;
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
