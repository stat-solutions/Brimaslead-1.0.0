import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDeskNotificationsComponent } from './front-desk-notifications.component';

describe('FrontDeskNotificationsComponent', () => {
  let component: FrontDeskNotificationsComponent;
  let fixture: ComponentFixture<FrontDeskNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontDeskNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontDeskNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
