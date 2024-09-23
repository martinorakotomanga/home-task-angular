import { Component } from '@angular/core';

@Component({
  selector: 'app-spin',
  template: `
  <div class="spinner spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  `,
  styleUrl: './spin.component.css'
})
export class SpinComponent {}
