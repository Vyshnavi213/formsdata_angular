import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PeriodicElement } from './employee';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private urllink = "/assets/data/employees.json";
  constructor(private http: HttpClient) { }

  getElement_data(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>(this.urllink).pipe(
      catchError(this.errorHandler)
    );
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server error");
  }
}

