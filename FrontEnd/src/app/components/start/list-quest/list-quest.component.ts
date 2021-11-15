import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quest } from 'src/app/models/quest';
import { AnswerQuestService } from 'src/app/services/answer-quest.service';
import { QuestService } from 'src/app/services/quest.service';
import { QuestComponent } from '../../dashboard/questionnarie/quest/quest.component';

@Component({
  selector: 'app-list-quest',
  templateUrl: './list-quest.component.html',
  styleUrls: ['./list-quest.component.css']
})
export class ListQuestComponent implements OnInit {

loading?: boolean;
listQuest?: any[] = [];

  constructor(private questService: QuestService,
              private route: Router,
              private answerQuestService: AnswerQuestService) { }

  ngOnInit(): void {
    this.getListQuest();
  }

  getListQuest(): void{
    this.loading = true;
    this.questService.getListQuest().subscribe(data =>{
      this.loading = false;
      this.listQuest = data;
    }, error =>{
      console.log(error);
    })
  }

  //Aqui le decimos que la variable que pasan por parametro es la misma
  //es la misma que en la del servicio
  enterName(idQuest: number):  void{
    this.answerQuestService.idQuest = idQuest;
    this.route.navigate(['/start/introduce-name']);
  }
}
