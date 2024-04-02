import { Component, Input } from '@angular/core';
import { UserService } from '../../Services/User.service';
import { user } from '../../Models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LoginComponent {

  constructor(private UserSvc: UserService, private router: Router, private active: ActivatedRoute) {
  }

  userDetails: any = { username: null, password: null }

  user: user | null = null;

  toEnter() {
    if (this.userDetails.password.length < 8 || this.userDetails.password.indexOf(' ') != -1)
      alert("The password short");
    else {
      this.UserSvc.getUserFromServer(this.userDetails.username, this.userDetails.password)
        .subscribe((res: any) => {
          this.user = res;
          this.user = res;
          if (this.user) {
            localStorage.clear();
            localStorage.setItem("user", JSON.stringify(this.user));
            this.userDetails.username = ' ';
            this.userDetails.password = ' ';
            this.router.navigate(['../listOfJobs'], { relativeTo: this.active })
            this.UserSvc.countOfCv = 0;
          } else {
            alert("not exeit");
          }
        })
    }
  }
}