import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService,
              private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');

    if(token){
      request = request.clone({setHeaders:{Authorization: `Bearer ${token}`}});
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse)=>{
        if(error.status === 401){
          this.toastr.error('Log first', 'Time out');
          this.router.navigate(['/start.login']);
        }
        return throwError(error);
      })
    );



  }




}
