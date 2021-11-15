import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerQuestService } from 'src/app/services/answer-quest.service';

@Component({
  selector: 'app-introduce-name',
  templateUrl: './introduce-name.component.html',
  styleUrls: ['./introduce-name.component.css']
})
export class IntroduceNameComponent implements OnInit {

  nameParicipant: string = '';
  
  constructor(private route: Router,
              private answerQuestService: AnswerQuestService) { }

  ngOnInit(): void {
    if(this.answerQuestService.idQuest == null){
      this.route.navigate(["/start"]);
    }
  }

  next(): void{
    this.answerQuestService.nameParticipant = this.nameParicipant;
    this.route.navigate(["start/ask"]);
  }
}
