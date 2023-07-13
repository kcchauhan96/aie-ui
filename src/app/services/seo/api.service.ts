import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private getComparisonPdfURL: string = 'test';
    constructor(private http: HttpClient) {

    }
  getComparisonPdf() : Observable<any>{
    return this.http.get(this.getComparisonPdfURL);
  }
  
 


}
