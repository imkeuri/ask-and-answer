import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endPoint;
    this.myApiUrl = 'api/Usuario';
   }

   /*This work in the next way we send
   the url whick is contains in the
    variable myAppUrl + MyApiUrl + usuario*/
   saveUser(usuario:User): Observable<any>{

    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);

  }

  changePassword(oldPassword: string): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + '/ChangePass' , oldPassword)
  }

}
