import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../Services/User.service';
import { Job } from '../../Models/Job'

@Component({
  selector: 'app-show-detail-of-job',
  templateUrl: './show-detail-of-job.component.html',
  styleUrl: './show-detail-of-job.component.scss'
})

export class ShowDetailOfJobComponent implements OnInit {

  constructor(private router: ActivatedRoute, private JobsSvc: UserService) {
    this.jobs = JobsSvc.jobs;
  }

  jobs: Job[] = []

  correctJob: Job | undefined

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      console.log(params);
      this.jobs = this.JobsSvc.jobs;
      console.log(this.jobs);
      this.correctJob = this.jobs.find(x => (x["name"] == params["name"]));
      console.log(this.correctJob);
    })
  }
}
