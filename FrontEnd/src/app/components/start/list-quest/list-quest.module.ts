import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListQuestRoutingModule } from './list-quest-routing.module';
import {SharedModule} from '../../../shared/shared.module'
//Components
import { AskComponent } from './ask/ask.component';
import { AnswerQuestComponent } from './answer-quest/answer-quest.component';
import { IntroduceNameComponent } from './introduce-name/introduce-name.component';

//Modules

@NgModule({
  declarations: [
    AskComponent,
    AnswerQuestComponent,
    IntroduceNameComponent
  ],
  imports: [
    CommonModule,
    ListQuestRoutingModule,
    SharedModule
  ]
})
export class ListQuestModule { }
