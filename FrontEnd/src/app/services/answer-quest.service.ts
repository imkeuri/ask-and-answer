import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { environment } from 'src/environments/environment';
import { answerQuest } from '../models/answerQuest';
import { Quest } from '../models/quest';

@Injectable({
  providedIn: 'root'
})
export class AnswerQuestService {

  myAppUrl: string;
  myApiUrl: string;

  nameParticipant!: string;
  idQuest!: number;
  answers: number[]=[];
  quest!: Quest; 

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endPoint;
    this.myApiUrl = "api/AnswerQuest/"
   }

   saveAnswerQuest(answerQuest: answerQuest): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, answerQuest);
   }

   getListQuestAnswer(QuestId: number): Observable<any>{
     return this.http.get(this.myAppUrl + this.myApiUrl + QuestId);
   }

   deleteAnswer(id: number): Observable<any>{
     return this.http.delete(this.myAppUrl+this.myApiUrl + id);
   }

   getListQuestAnswerByAnswer(id:number): Observable<any>{
     return this.http.get(this.myAppUrl + this.myApiUrl + 'GetAnswerById/' + id);
   }
}
