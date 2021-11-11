import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewQuestComponent } from './components/dashboard/questionnaire/new-quest/new-quest.component';
import { StepOneComponent } from './components/dashboard/questionnaire/new-quest/step-one/step-one.component';
import { NewAskComponent } from './components/dashboard/questionnaire/new-quest/step-two/new-ask/new-ask.component';
import { StepTwoComponent } from './components/dashboard/questionnaire/new-quest/step-two/step-two.component';
import { QuestionnaireComponent } from './components/dashboard/questionnaire/questionnaire.component';
import { QuestComponent } from './components/dashboard/questionnarie/quest/quest.component';
import { AnswerQuestComponent } from './components/start/list-quest/answer-quest/answer-quest.component';
import { AskComponent } from './components/start/list-quest/ask/ask.component';
import { IntroduceNameComponent } from './components/start/list-quest/introduce-name/introduce-name.component';
import { ListQuestComponent } from './components/start/list-quest/list-quest.component';
import { LoginComponent } from './components/start/login/login.component';
import { RegistrerComponent } from './components/start/registrer/registrer.component';
import { StartComponent } from './components/start/start.component';
import { WelcomeComponent } from './components/start/welcome/welcome.component';

const routes: Routes = [

  { path:' ', redirectTo: '/start', pathMatch:'full'},
  { path: 'start', component: StartComponent, children:[
    { path: '', component: WelcomeComponent},
    { path: 'registrer', component: RegistrerComponent},
    { path: 'login', component: LoginComponent},
    {path: 'list-quest', component: ListQuestComponent},
    {path: 'introduce-name', component: IntroduceNameComponent},
    {path: "ask", component: AskComponent},
    {path: 'answerQuest', component: AnswerQuestComponent}
  ]},
  { path: 'dashboard', component: DashboardComponent, children:[
    {path: '', component: QuestionnaireComponent},
    {path: 'changePassword', component: ChangePasswordComponent},
    {path:'seeQuest/:id', component: QuestComponent},
    {path: 'new-quest', component: NewQuestComponent, children:[
      {path: 'step-one', component: StepOneComponent},
      {path: 'step-two', component: StepTwoComponent, children:[
        {path: 'new-ask', component: NewAskComponent}
      ]}
    ]}
  ]},
  { path: '**', redirectTo: '/start', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
