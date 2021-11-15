import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAnswers } from 'src/app/interfaces/user-answers';
import { Quest } from 'src/app/models/quest';
import { AnswerQuestService } from 'src/app/services/answer-quest.service';

@Component({
  selector: 'app-answer-quest',
  templateUrl: './answer-quest.component.html',
  styleUrls: ['./answer-quest.component.css']
})
export class AnswerQuestComponent implements OnInit, UserAnswers {

  quest: any = {};
  answerUSer: number[] = [];

  constructor(private answerQuestService: AnswerQuestService,
              private router: Router) {

                this.quest = this.answerQuestService.quest;
                this.answerUSer = this.answerQuestService.answers;

               }
 

  ngOnInit(): void {
    if (this.answerQuestService.idQuest == null){
      this.router.navigate(["/start"]);
    } else{

      if(typeof this.quest == "undefined"){
        alert('The quest is empty');
        this.router.navigate(["/start"]);
      } else{
       // console.log(this.quest);
        //console.log(this.answerUSer);
      }   
          //console.log(this.answerQuestService.quest);
          //console.log(this.answerQuestService.answers);
        
     
    }
  }

}
