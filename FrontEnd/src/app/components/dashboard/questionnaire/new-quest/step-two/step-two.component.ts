import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ask } from 'src/app/models/ask';

import { Quest } from 'src/app/models/quest';
import { QuestService } from 'src/app/services/quest.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {

  Name: string ="";
  Description: string = "";
  listAsk: Ask[] = [];
  loading = false;

  constructor(private questService: QuestService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.Name = this.questService.Name;
    this.Description = this.questService.Description;
  }



  saveAsk(ask: Ask):void{
    this.listAsk.push(ask);
    console.log(this.listAsk);
  }



  deleteQuest(index: number): void{
    this.listAsk.splice(index, 1);
  }



  saveQuest():void{

    const quest: Quest = {
      Name: this.Name,
      Description: this.Description,
      Asks: this.listAsk
    };

      this.loading = true;

      this.questService.saveQuest(quest).subscribe(data=>{

        this.toastr.success('The quest was registered with success', 'Quest registered');
        this.router.navigate(['/dashboard']);
        this.loading = false;

      }, error=> {
        console.log(error);
        this.toastr.error('Oops.. an error', 'Error');
        this.router.navigate(['/dashboard']);
      
      });
  }
}
