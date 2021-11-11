import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modules
import { AppRoutingModule } from './app-routing.module';
import{ ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

//Interceptors
import {AddTokenInterceptor} from '../app/helpers/add-token.interceptor';

//components
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { WelcomeComponent } from './components/start/welcome/welcome.component';
import { LoginComponent } from './components/start/login/login.component';
import { RegistrerComponent } from './components/start/registrer/registrer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionnaireComponent } from './components/dashboard/questionnaire/questionnaire.component';
import { ChangePasswordComponent } from './components/dashboard/change-password/change-password.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { NewQuestComponent } from './components/dashboard/questionnaire/new-quest/new-quest.component';
import { StepOneComponent } from './components/dashboard/questionnaire/new-quest/step-one/step-one.component';
import { StepTwoComponent } from './components/dashboard/questionnaire/new-quest/step-two/step-two.component';
import { NewAskComponent } from './components/dashboard/questionnaire/new-quest/step-two/new-ask/new-ask.component';
import { QuestComponent } from './components/dashboard/questionnarie/quest/quest.component';
import { ListQuestComponent } from './components/start/list-quest/list-quest.component';
import { AskComponent } from './components/start/list-quest/ask/ask.component';
import { AnswerQuestComponent } from './components/start/list-quest/answer-quest/answer-quest.component';
import { IntroduceNameComponent } from './components/start/list-quest/introduce-name/introduce-name.component';
import { FormsModule } from '@angular/forms';
import { StadisticsComponent } from './components/dashboard/questionnaire/stadistics/stadistics.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    WelcomeComponent,
    LoginComponent,
    RegistrerComponent,
    DashboardComponent,
    QuestionnaireComponent,
    ChangePasswordComponent,
    NavbarComponent,
    LoadingComponent,
    NewQuestComponent,
    StepOneComponent,
    StepTwoComponent,
    NewAskComponent,
    QuestComponent,
    ListQuestComponent,
    AskComponent,
    AnswerQuestComponent,
    IntroduceNameComponent,
    StadisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
