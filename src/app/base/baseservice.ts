import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
//import { of } from 'rxjs/observable/of';
import { catchError, map, tap, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { MessageService } from './message-service';
import { environment } from '../../environments/environment';

const httpOptions = {} 
// {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };

export abstract class BaseService<T> {
  constructor(
    protected http: HttpClient,
    protected messageService: MessageService
  ) {}

  current:T

  createInstance(){ return <T>{};}

  resetCurrent (){ 
    this.current = this.createInstance()
  }

  get currentItem():T{
   
    if (this.current === null || this.current === undefined){
      this.current = this.createInstance();
    }
    return this.current;
  }

  getAll(filter?:any){
    return this.http.get<T[]>(`${this.getFetchAllUrl(filter)}`).pipe(
      map((x:any) => x.results),
      tap(x => console.log('found records',x)),
      catchError(this.handleError<T[]>("searchrecords", []))
    );
  }

  get(id: number): Observable<T> {
    const url = `${this.getUrl()}/${id}`;
    return this.http.get<T>(url).pipe(
      tap(x => {
        this.log(`fetched entityid=${id}`);
        this.current = x
      }),
      catchError(this.handleError<T>(`getentityid=${id}`))
    );
  }

  /* GET records whose name contains search term */
  searchRecords(term: string): Observable<T[]> {
    if (!term.trim()) {
      // if not search term, return empty entityarray.
      return of([]);
    }
    return this.http.get<T[]>(`${this.getUrl()}?search=${term}`).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map((x:any) => x.results),
      tap(x => this.log(`found records matching "${term}" -> ${x}`)),
      catchError(this.handleError<T[]>("searchrecords", []))
    );
  }
 
  //////// Save methods //////////

  /** POST: add a new entityto the server */
  add(entity :T): Observable<T> {
    console.log('posting to ', this.getUrl())
    return this.http.post<T>(this.getUrl(), entity, httpOptions).pipe(
     tap((entity: T) => this.log(`added entityw/ id=${entity['id']}`)),
      catchError(this.handleError<T>("addHero"))
    );
  }

  /** DELETE: delete the entityfrom the server */
  delete(entity: T): Observable<number> {
    const id = typeof entity=== "number" ? entity: entity['id'];
    const url = `${this.getUrl()}/${id}`;

    this.http.delete<T>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted entityid=${id}`)),
      catchError(this.handleError<T>("deleteHero"))
    );

    return of(id);
  }

  /** PUT: update the entityon the server */
  update(entity :T): Observable<any> {
    this.http.put(this.getUrl(), entity, httpOptions).pipe(
      tap(_ => this.log(`updated entityid=${entity['id']}`)),
      catchError(this.handleError<any>("updateHero"))
    );

    return of(entity);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add("HeroService: " + message);
  }

  url = environment.host
  endpoint = ""
  
  getUrl(): string {
    return `${this.url}/${this.endpoint}`
  }

  getFetchAllUrl(filter:any): string {
    return this.getUrl();
  }
}
