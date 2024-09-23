import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  Object = Object;
  public dayTask: any;
  public spin: boolean;

  constructor(
    private taskService: TaskService
  ) {}

  public ngOnInit() {
    this.spin = true;

    setTimeout(() => this.spin = false, 100);

    this.taskService.fetchTask('A', 'Lundi').subscribe(res=> {
      if(res) {
        this.dayTask = res;
        console.log('res==>', this.dayTask)
        
        for(let key in this.dayTask) {
          console.log(key);
        }
      }
    })
  }
}
