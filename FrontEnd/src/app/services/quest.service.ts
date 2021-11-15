import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Quest } from '../models/quest';

@Injectable({
  providedIn: 'root'
})
export class QuestService {
myAppUrl: string;
myApiUrl: string;
Name= '';
Description ='';
  constructor(private http: HttpClient) {
    this.myApiUrl = 'api/Quest/';
    this.myAppUrl = environment.endPoint;
   }


   saveQuest(quest:Quest):Observable<any>{
    return this.http.post(this.myAppUrl+this.myApiUrl, quest);
   }
   getListQuestByUser(): Observable<any>{
      return this.http.get(this.myAppUrl + this.myApiUrl + "GetListQuestByUser")
   }
  deleteQuest(idQuest: number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + idQuest);
  }
  getQuest(idQuest: number): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + idQuest);
  }
  getListQuest(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + "GetList");
  }
}
