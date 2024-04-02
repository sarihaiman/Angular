import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterJobComponent } from './components/filter-job/filter-job.component';
import { HomeComponent } from './components/home/home.component';
import { JobComponent } from './components/job/job.component';
import { ListOfJobsComponent } from './components/list-of-jobs/list-of-jobs.component';
import { LoginComponent } from './components/log-in/log-in.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ShowDetailOfJobComponent } from './components/show-detail-of-job/show-detail-of-job.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OpacityDirective } from './directives/opacity.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilterJobComponent,
    HomeComponent,
    JobComponent,
    ListOfJobsComponent,
    LoginComponent,
    ManagerComponent,
    ShowDetailOfJobComponent,
    OpacityDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
