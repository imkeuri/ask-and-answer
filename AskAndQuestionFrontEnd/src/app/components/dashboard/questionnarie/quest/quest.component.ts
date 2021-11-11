import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestService } from 'src/app/services/quest.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  idQuest: number;
  loading?: boolean;
  quest?: any;

  constructor(private questService: QuestService,
              private aRoute: ActivatedRoute) {
                this.idQuest = +this.aRoute.snapshot.paramMap.get('id')!;
               }

  ngOnInit(): void {
    this.getQuest();
    }


  getQuest():void{
    this.loading = true;
    this.questService.getQuest(this.idQuest).subscribe(data=>{
      this.loading = false;
      this.quest = data;
      console.log(data);
    })
  }
}
