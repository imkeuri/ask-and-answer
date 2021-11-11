import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Quest } from 'src/app/models/quest';
import { LoginService } from 'src/app/services/login.service';
import { QuestService } from 'src/app/services/quest.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {


  user?:string;
  listQuest?: any[];
  loading?: boolean;


  constructor(private loginService: LoginService,
              private questService: QuestService,
              private toastr: ToastrService) {

   }

  ngOnInit(): void {
    this.getQuestByUser();
    this.getUser();
  
  }

  getUser(): void{
    console.log(this.user = this.loginService.getTokenDecoded());
    this.user = this.loginService.getTokenDecoded().sub;
  }

  getQuestByUser(): void{
    this.loading = true;
    this.questService.getListQuestByUser().subscribe(data =>{
      this.listQuest = data;
      this.loading = false;
    }, error=>{
      console.log(Error);
      this.toastr.error("The user don't have any quest",'Error');
      this.loading = false;
    })
  }

  deleteQuest(idQuest:number):void{
    if(confirm('Are you sure you want delete this Quest')){
      this.loading = true;
      this.questService.deleteQuest(idQuest).subscribe(data=>{
        this.loading = false;
        this.toastr.success('The quest was deleted succeful','Quest deleted');
        this.getQuestByUser();
      }, error=>{
        this.toastr.error('Ups.. error happened', 'Error xd');
      });
      ;
    }
  }
}
