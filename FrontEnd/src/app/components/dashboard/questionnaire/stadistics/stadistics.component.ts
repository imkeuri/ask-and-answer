import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnswerQuestService } from 'src/app/services/answer-quest.service';

@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.css']
})
export class StadisticsComponent implements OnInit {

  idQuest: number;
  loading = false;
  listQuestAnswer: any[]= [];


  constructor(private aRoute: ActivatedRoute,
              private answerQuestService: AnswerQuestService,
              private toastr: ToastrService
              ) {
                this.idQuest = +this.aRoute.snapshot.paramMap.get('id')!;
               }

  ngOnInit(): void {
    this.getListQuest();
    console.log(this.idQuest);
  }


  getListQuest():void{
    this.loading = true;
    this.answerQuestService.getListQuestAnswer(this.idQuest).subscribe(data=>{
      this.loading = false;
      this.listQuestAnswer = data;
    }, error =>{
      this.loading = false;
      console.log(error);
    });
  }

  deleteAnswer(id:number):void{
    this.loading = true;
    this.answerQuestService.deleteAnswer(id).subscribe(data =>{
    this.loading = false;
    this.toastr.error('The answer was eliminated succefully', 'Answer deleted');
    this.getListQuest();
  }, error=>{
      this.loading = false;
      console.log(error);
      this.toastr.error('An error happened'); 
   })
  }
}
