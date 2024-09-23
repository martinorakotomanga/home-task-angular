import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ground',
  template: `
    <div class="w-100">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrl: './ground.component.css'
})
export class GroundComponent implements OnInit {
  public spin: boolean = true;

  public ngOnInit() {
    this.spin = true;
    setTimeout(()=> this.spin = false, 200);
  }
}
