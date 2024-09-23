import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-msg-page',
  templateUrl: './msg-page.component.html',
  styleUrl: './msg-page.component.css'
})
export class MsgPageComponent implements OnInit {
  
  public allMessage: any;
  public userMatricule: any;
  public content: string;
  public spin: boolean;

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.userMatricule = +this.taskService.token.split(':')[0];
    console.log(this.userMatricule);
    
    this.spin = true;

    setTimeout(() => this.spin = false, 200);

    this.taskService.getMessage().subscribe(res=> {
      this.allMessage = res.reverse();
      console.log(res);
    })
  }

  handleMessage() {
    this.taskService.setMessage(this.content).subscribe(res=> {
      console.log(res);
      this.taskService.getMessage().subscribe(res=> {
        this.allMessage = res.reverse();
      })
    })
  }

}
