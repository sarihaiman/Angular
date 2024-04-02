import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListOfJobsComponent } from './components/list-of-jobs/list-of-jobs.component';
import { LoginComponent } from './components/log-in/log-in.component';
import { ShowDetailOfJobComponent } from './components/show-detail-of-job/show-detail-of-job.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'listOfJobs' , component:ListOfJobsComponent},
  {path:'listOfJobs/:nameDomain',component:ListOfJobsComponent},
  {path: 'Login' ,component:LoginComponent},
  {path:'listOfJobs/Show/:name',component:ShowDetailOfJobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }