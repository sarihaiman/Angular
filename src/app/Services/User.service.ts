import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { user } from "../Models/user";
import { Job } from "../Models/Job";
import { Observable } from "rxjs";
import { domain } from "../Models/Domain";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient) {
        localStorage.clear();
        this.getJobFromServer().subscribe((res: any) => res.forEach((c: any) => { c["domain"] = domain[c["domain"]]; this.jobs.push(c) }));
    }
    jobsSendCv: string[] = []
    countOfCv: Number = 0;
    user: user | null = null
    getUserFromServer(name: string, password: string): Observable<any> {
        this.user =
        {
            name: name,
            password: password,
            id: 0,
            Domain: domain.teaching
        }
        return this.http.post(`https://localhost:44337/api/User`, this.user)
    }

    jobs: Job[] = [];
    getJobFromServer(): Observable<any> {
        return this.http.get("https://localhost:44337/api/Job");
    }

    public get Jobs() {
        return this.jobs
    }
}