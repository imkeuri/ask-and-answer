import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {SharedModule} from '../../shared/shared.module';
//modules

//components
import { NewQuestComponent } from './questionnaire/new-quest/new-quest.component';
import { StepOneComponent } from './questionnaire/new-quest/step-one/step-one.component';
import { StepTwoComponent } from './questionnaire/new-quest/step-two/step-two.component';
import { NewAskComponent } from './questionnaire/new-quest/step-two/new-ask/new-ask.component';
import { QuestComponent } from './questionnarie/quest/quest.component';
import { StadisticsComponent } from './questionnaire/stadistics/stadistics.component';
import { DatailsAnswerComponent } from './questionnaire/stadistics/datails-answer/datails-answer.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';



@NgModule({
  declarations: [
    NewQuestComponent,
    StepOneComponent,
    StepTwoComponent ,
    NewAskComponent ,
    QuestComponent ,
    StadisticsComponent,
    DatailsAnswerComponent,
    ChangePasswordComponent,
    QuestionnaireComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
