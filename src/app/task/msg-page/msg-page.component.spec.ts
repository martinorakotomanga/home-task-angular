import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgPageComponent } from './msg-page.component';

describe('MsgPageComponent', () => {
  let component: MsgPageComponent;
  let fixture: ComponentFixture<MsgPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MsgPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
