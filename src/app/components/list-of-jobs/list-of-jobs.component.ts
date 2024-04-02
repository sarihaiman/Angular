import { Component, Input, OnInit, output } from '@angular/core';
import { Job } from '../../Models/Job';
import { UserService } from '../../Services/User.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-of-jobs',
  templateUrl: './list-of-jobs.component.html',
  styleUrl: './list-of-jobs.component.scss'
})

export class ListOfJobsComponent implements OnInit {

  constructor(private JobsSvc: UserService, private router: Router, private active: ActivatedRoute) {
    if (!(localStorage.getItem('user'))) {
      alert('you dont can to continue without log-in')
      this.router.navigate(['../Login'], { relativeTo: this.active })
    }
    else
      this.jobs = JobsSvc.Jobs;
  }

  jobs: Job[] = this.JobsSvc.jobs

  ngOnInit(): void {
    this.active.params.subscribe(params => {
      if (params['nameDomain'])
        this.filterChange(params['nameDomain']);
    })
  }

  filterDetails: any = null
  filterChange($event: any) {
    this.filterDetails = $event
    this.jobs = this.jobs.filter(x => ((x["domain"]) === (this.filterDetails)));
  }

  filterDetails2: any = null
  filterChange2($event: any) {
    if ($event["nameDomain"][0] != undefined && $event["nameLocation"][0] != undefined)
      alert("error")
    else {
      if ($event["nameDomain"][0] != undefined) {
        this.filterDetails2 = $event["nameDomain"];
        this.jobs = this.jobs.filter(x => ((x["domain"]) === (this.filterDetails2)));
      }
      else {
        this.filterDetails2 = $event["nameLocation"];
        this.jobs = this.jobs.filter(x => ((x["location"]) === (this.filterDetails2)));
      }
    }
  }
}
