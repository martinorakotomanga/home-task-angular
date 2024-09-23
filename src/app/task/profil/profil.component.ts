import { Component, OnInit } from '@angular/core';
import { User } from '../../user/user';
import { TaskService } from '../task.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit {
  public user: User;
  public message: string;
  public task: string;

  constructor(
    private taskService: TaskService,
    private route: Router,
    private cookie: CookieService
  ) {}

  public ngOnInit() {
    this.taskService.getUser().subscribe(res=> {
      if(res) {
        this.user = res;
        this.task = JSON.stringify(res.current_task).split('"')[1];
      }
    });
  }

  logOut() {
    this.cookie.set('isLogin', 'false');
    this.cookie.set('token', '0');
    setTimeout(()=> this.route.navigate(['/form']), 200);
  }
}
