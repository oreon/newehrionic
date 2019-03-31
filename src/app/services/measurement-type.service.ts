import { Injectable } from '@angular/core';
import { BaseService } from '../base/baseservice';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../base/message-service';
import { MeasurementType } from '../entities/measurement-type.model';

@Injectable({
  providedIn: 'root'
})
export class MeasurementTypeService extends BaseService<MeasurementType>{
  
    endpoint = 'measurementTypes'
    
    /**
     * Constructor of the Service with Dependency Injection
     * @param http The standard Angular HttpClient to make requests
     */
    constructor(protected http: HttpClient, 
      protected messageService:MessageService) { 
        super(http, messageService)
      }
   
}
