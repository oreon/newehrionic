import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { BaseService } from '../base/baseservice';
import { MessageService } from '../base/message-service';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}



@Injectable({
  providedIn: 'root'
})
export class PatientService extends BaseService<Patient>{
  
  endpoint = 'patients'
  
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(protected http: HttpClient, 
    protected messageService:MessageService) { 
      super(http, messageService)
    }
 
  /**
  * Get data from the OmdbApi 
  * map the result to return only the results that we need
  * 
  * @param {string} title Search Term
  * @param {SearchType} type movie, series, episode or empty
  * @returns Observable with the search results
  */
  searchData(title: string): Observable<any> {
    return super.searchRecords(title)
  }
 
  /**
  * Get the detailed information for an ID using the "i" parameter
  * 
  * @param {string} id imdbID to retrieve information
  * @returns Observable with detailed information
  */
  getDetails(id) {
    return super.get(id)
  }

  
}
