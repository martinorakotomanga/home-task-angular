import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-calendar-task',
  templateUrl: './calendar-task.component.html',
  styleUrl: './calendar-task.component.css'
})
export class CalendarTaskComponent implements OnInit {

  public Object = Object;
  public WeekListTask: any;
  public spin: boolean;

  constructor(
    private taskService: TaskService
  ) {}

  public ngOnInit() {
    this.spin = true;

    setTimeout(() => this.spin = false, 100);

    this.taskService.fetchTask('A', 'All').subscribe(res => {
      if(res) {
        let objectRes = res;
        for(let key in objectRes) {
          if(objectRes[key]) this.WeekListTask = {...this.WeekListTask, [key]: {...objectRes[key]}};
        }
      }
    })
  }

}
