import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestService } from 'src/app/services/quest.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  
  dataQuest: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private questService: QuestService) {
                this.dataQuest = this.fb.group({
                  Name: ['', Validators.required],
                  Description: ['', Validators.required]
                });
               }

  ngOnInit(): void {
  }


  stepOne():void{
    this.questService.Name = this.dataQuest.value.Name;
    this.questService.Description = this.dataQuest.value.Description;
    this.router.navigate(["/dashboard/new-quest/step-two"]);
  }
}
