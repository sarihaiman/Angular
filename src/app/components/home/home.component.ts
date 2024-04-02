import { Component, EventEmitter, Output } from '@angular/core';
import { user } from '../../Models/user'
import { domain } from '../../Models/Domain';
import { UserService } from '../../Services/User.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  user: any;
  x: any;
  countCv: any = 0;
  jobSendCv: string[] = this.JobsSvc.jobsSendCv

  constructor(private JobsSvc: UserService) {
    this.user = localStorage.getItem("user");
    if (this.user !== null) {
      this.user = JSON.parse(this.user);
      this.user["domain"] = domain[this.user["domain"]];
      this.x = this.user["domain"];
      this.countCv = (Number)(JobsSvc.countOfCv);
    }
  }
}
