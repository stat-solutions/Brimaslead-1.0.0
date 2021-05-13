import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaNotificationsComponent } from './qa-notifications.component';

describe('QaNotificationsComponent', () => {
  let component: QaNotificationsComponent;
  let fixture: ComponentFixture<QaNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
