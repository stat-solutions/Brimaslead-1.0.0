import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementNotificationComponent } from './procurement-notification.component';

describe('ProcurementNotificationComponent', () => {
  let component: ProcurementNotificationComponent;
  let fixture: ComponentFixture<ProcurementNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurementNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcurementNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
