import { Component, Input } from '@angular/core';
import { Job } from '../../Models/Job';
import { Router } from '@angular/router';
import { UserService } from '../../Services/User.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {

  constructor(private router: Router, private JobsSvc: UserService) {
  }

  @Input('jo') jo: Job | null = null;

  ShowDeatils() {
    this.router.navigate(['listOfJobs/Show/' + this.jo?.name]);
  }

  sentCV() {
    this.JobsSvc.countOfCv = (Number)(this.JobsSvc.countOfCv) + (Number)(1);
    this.JobsSvc.jobsSendCv.push((String)(this.jo?.name));
  }
}
