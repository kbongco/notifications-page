import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationWithPictureComponent } from './notification-with-picture.component';

describe('NotificationWithPictureComponent', () => {
  let component: NotificationWithPictureComponent;
  let fixture: ComponentFixture<NotificationWithPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationWithPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationWithPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
