import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
// import { RegisterUser } from '../models/register';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}
  getUserForApproval(): any {
    return this.http.get<any>(`${this.API_URL}/api/user/getUsersForApproval`);
  }

  approveUser(postData: any): any {
    // console.log(object);
    return this.http.post<any>(`${this.API_URL}/api/user/putApproveUser`, postData)
        .pipe(
          tap(res => console.log(`AFTER MAP: ${res}`)),
          // catchError(this.handleCompanySetupError)
        );

  }
  rejectUser(postData: any): any {
    // console.log(object);
    return this.http.post<any>(`${this.API_URL}/api/user/putRejectUserApproval`, postData)
        .pipe(
          tap(res => console.log(`AFTER MAP: ${res}`)),
          // catchError(this.handleCompanySetupError)
        );
  }
  getUsers(): any {
    return this.http.get<any>(`${this.API_URL}/api/user/getAllUsers`);
  }
  getUser(id: number): any {
    return this.http.get<any>(`${this.API_URL}/api/user/getUser/?id=${id}`);
  }
  putEditUser(postData: any): any {
    return this.http.post<any>(`${this.API_URL}/api/user/putEditUser`, postData);
  }
  putEditUserPhotoUrl(postData: any): any {
    return this.http.post<any>(`${this.API_URL}/api/user/putEditUserPhotoUrl`, postData);
  }
  putEditUserEmail(postData: any): any {
    // console.log(object);
    return this.http.post<any>(`${this.API_URL}/api/user/putEditUserEmail`, postData);
  }
  getUserRoles(): any {
    return this.http.get<any>(`${this.API_URL}/api/auth/userRoles`);
  }
  getLoggedInUsers(): any {
    return this.http.get<any>(`${this.API_URL}/api/user/getLoggedInUsers`);
  }
  getLoggedOutUsers(postData: any): any {
    return this.http.post<any>(`${this.API_URL}/api/user/getLoggedOutUsers`, postData);
    // {
    //   "startDate":"2020-01-01",
    //   "endDate":"2021-02-28"
    //   }
  }
  getLoggInStatus(postData: any): any {
    return this.http.post<any>(`${this.API_URL}/api/user/getLoggInStatus`, postData);
    // {
    //   "startDate":"2020-01-01",
    //   "endDate":"2021-02-28"
    //   }
  }
  userLogOut(userId: number): any {
    return this.http.get<any>(`${this.API_URL}/api/user/logOutUser?userId=${userId}`);
  }
}
