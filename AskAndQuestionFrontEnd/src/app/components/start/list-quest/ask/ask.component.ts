import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { answerQuest } from 'src/app/models/answerQuest';
import { answerQuestDetail } from 'src/app/models/answerQuestDetail';
import { AnswerQuestService } from 'src/app/services/answer-quest.service';
import { QuestService } from 'src/app/services/quest.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  idQuest: number = 0;
  listAsk: any[] = [];
  loading: boolean = false;
  awsConfirm =false;
  op: number = 0;
  index = 0;
  idSelectedAnswer! : number;

  listAnswerDetail: answerQuestDetail[] = [];
  
  constructor(private answerQuestService: AnswerQuestService,
              private questService: QuestService,
              private router: Router) { }

  ngOnInit(): void {
    this.idQuest = this.answerQuestService.idQuest;
    if (this.idQuest == null){
      this.router.navigate(["/start"]);
      return;
    } 
    this.getQuest();
  }


  getQuest():void{
    this.loading = true;
    this.questService.getQuest(this.idQuest).subscribe(data=>{
      this.listAsk = data.asks;
      this.loading = false;
      this.answerQuestService.quest = data;
    });
  }




  getAsk():string{

    if( this.listAsk[this.index]?.description === null){
      alert('The index is empty');
    } 
      return this.listAsk[this.index]?.description;
    

  }




  getIndex(): number{
    return this.index;
  }





  answerSelected(answer: number, idAnswer: number) :void{
    this.op! = answer;
    this.awsConfirm! = true;
    this.idSelectedAnswer! = idAnswer;
      if(this.idSelectedAnswer == undefined){
        alert('undefiner id');
        this.router.navigate(["/start"]);
      }
    console.log(this.idSelectedAnswer);
  }



  AddClassOption(answer: any): any { 
    const ef =`active text-light`;
    if (answer === this.op)
      return ef;
    }




  next():void{
    this.answerQuestService.answers.push(this.idSelectedAnswer);
    
    //creamos un objeto repuesta detalle
    console.log(this.idSelectedAnswer);

    const detailAnswer: answerQuestDetail={
      AnswerId!: this.idSelectedAnswer
    }
    
    this.listAnswerDetail.push!(detailAnswer);

    console.log(this.listAnswerDetail);

    this.awsConfirm = false;
    this.index++;
    if(this.index === this.listAsk.length){
      this.saverAnswerQuest();
    }
  }

  saverAnswerQuest():void{
    const awsQuest: answerQuest={
      QuestId: this.answerQuestService.idQuest,
      NameParticipant: this.answerQuestService.nameParticipant,
      QuestAnswerDetails: this.listAnswerDetail
    }
    this.loading = true;
    this.answerQuestService.saveAnswerQuest(awsQuest).subscribe(data=>{
      this.loading =false;

      if (data == undefined){
        alert('no hay datos')
      }

      console.log(data);
      this.router.navigate(["/start/answerQuest"]);
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }
}
