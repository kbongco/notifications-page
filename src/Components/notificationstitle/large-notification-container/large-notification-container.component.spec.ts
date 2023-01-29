import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeNotificationContainerComponent } from './large-notification-container.component';

describe('LargeNotificationContainerComponent', () => {
  let component: LargeNotificationContainerComponent;
  let fixture: ComponentFixture<LargeNotificationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeNotificationContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeNotificationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
