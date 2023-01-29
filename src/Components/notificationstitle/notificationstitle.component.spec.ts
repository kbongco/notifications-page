import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationstitleComponent } from './notificationstitle.component';

describe('NotificationstitleComponent', () => {
  let component: NotificationstitleComponent;
  let fixture: ComponentFixture<NotificationstitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationstitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationstitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
