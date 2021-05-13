import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptorInterceptor implements HttpInterceptor {
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   return next.handle(request)
     .pipe(
       retry(3),
       catchError((errorResponse: HttpErrorResponse) => {
         let errorMessage = '';
         if (errorResponse.error instanceof ErrorEvent) {
           // client-side error
           errorMessage = `Error: ${errorResponse.error.error.message}`;
         } 
         else if(errorResponse){
            if (errorResponse.status === 0 && errorResponse.error instanceof ProgressEvent) {
    errorMessage='Error: Client-side or Network connection error occurred!!';
 
  }else{
           errorMessage =  `Error: ${errorResponse.error.error.message}`;
           }
         }
        //  console.log(errorMessage);
         return throwError(errorMessage);
       })
     )
 }
}

