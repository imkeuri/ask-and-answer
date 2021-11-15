import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import {ListQuestModule} from './components/start/list-quest/list-quest.module'
import { DashboardModule } from './components/dashboard/dashboard.module';
//Interceptors
import {AddTokenInterceptor} from '../app/helpers/add-token.interceptor';

//components
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { WelcomeComponent } from './components/start/welcome/welcome.component';
import { LoginComponent } from './components/start/login/login.component';
import { RegistrerComponent } from './components/start/registrer/registrer.component';
/*dont move */import { DashboardComponent } from './components/dashboard/dashboard.component';
/*dont move */import { NavbarComponent } from './components/dashboard/navbar/navbar.component';

import { ListQuestComponent } from './components/start/list-quest/list-quest.component';



@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    WelcomeComponent,
    LoginComponent,
    RegistrerComponent,
    DashboardComponent,
    NavbarComponent,
    ListQuestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    SharedModule,
    ListQuestModule,
    DashboardModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
