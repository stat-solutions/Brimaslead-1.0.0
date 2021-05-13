import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllOtherService {
  
   private API_URL = environment.apiUrl;
  private loggedInUser: string;
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(   private http: HttpClient) { }
  
 
   getUsersForApproval(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/api/user/getUsersForApproval`);
  }




}
