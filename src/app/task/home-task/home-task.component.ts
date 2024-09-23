import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-home-task',
  templateUrl: './home-task.component.html',
  styleUrl: './home-task.component.css'
})
export class HomeTaskComponent {

  public spin: boolean;

  ngOnInit() {
    this.spin = true;

    setTimeout(() => this.spin = false, 200);
  }
}
