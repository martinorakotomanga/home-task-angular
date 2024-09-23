import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTaskComponent } from './home-task.component';

describe('HomeTaskComponent', () => {
  let component: HomeTaskComponent;
  let fixture: ComponentFixture<HomeTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
