import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Answer } from 'src/app/models/answer';
import { answerQuestDetail } from 'src/app/models/answerQuestDetail';
import { Quest } from 'src/app/models/quest';
import { AnswerQuestService } from 'src/app/services/answer-quest.service';


@Component({
  selector: 'app-datails-answer',
  templateUrl: './datails-answer.component.html',
  styleUrls: ['./datails-answer.component.css']
})
export class DatailsAnswerComponent implements OnInit {

  id: number;
  loading = false;
  quest: any ={};
  answer: any ={};
  answerUser: answerQuestDetail[] =[];

  constructor(private aRoute: ActivatedRoute,
              private answerQuestService: AnswerQuestService,
              private toastr: ToastrService,
              private router: Router)
               { 
                  this.id = +this.aRoute.snapshot.paramMap.get('id')!;               
               }

  ngOnInit(): void {
  this.getListAnswerQuest();
  }

  getListAnswerQuest():void{
    this.loading = true;
    this.answerQuestService.getListQuestAnswerByAnswer(this.id).subscribe(data =>{
      this.loading = false;
      if(data.answer == 'ad' || null){
        alert('array is empty');
        this.router.navigate(['/dashboard']);
      }
      this.answer! = data.answer;
      this.quest! = data.quest;      
      console.log(data)
    },error => {
      this.loading = false
      this.toastr.error(error);
    });
  }
}
