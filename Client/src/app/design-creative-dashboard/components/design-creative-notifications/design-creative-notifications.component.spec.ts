import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignCreativeNotificationsComponent } from './design-creative-notifications.component';

describe('DesignCreativeNotificationsComponent', () => {
  let component: DesignCreativeNotificationsComponent;
  let fixture: ComponentFixture<DesignCreativeNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignCreativeNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignCreativeNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
