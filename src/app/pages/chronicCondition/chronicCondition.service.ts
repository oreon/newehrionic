import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { BaseService } from '../../base/baseservice';
import { MessageService } from '../../base/message-service';
import { ChronicCondition } from '../../entities/chronic-condition.model';



@Injectable({
providedIn: 'root'
})
export class ChronicConditionService extends BaseService<ChronicCondition>{

    endpoint = 'chronicConditions'

    /**
    * Constructor of the Service with Dependency Injection
    * @param http The standard Angular HttpClient to make requests
    */
    constructor(protected http: HttpClient,
    protected messageService:MessageService) {
        super(http, messageService)
    }


}