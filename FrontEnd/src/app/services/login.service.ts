import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  myAppUrl: string;
  myApiUrl: string;

  constructor( private http: HttpClient ) {
    this.myAppUrl = environment.endPoint;
    this.myApiUrl = "api/Login";
   }

   login(usuario: User): Observable<any>{
     return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
   }

   setLocalStorage(data:any): void{
     localStorage.setItem('token', data);
   }

    getToken(): string{
    return localStorage.getItem('token')!;
   }

getTokenDecoded():any{
  const helper = new JwtHelperService();
  const decodedToken = helper.decodeToken(localStorage.getItem('token')!);
  return decodedToken;
}


 deleteLocalStorage() : void{
   localStorage.clear();
 }
}
