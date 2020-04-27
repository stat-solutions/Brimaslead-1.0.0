import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanelCustomerComponent } from './right-panel-customer.component';

describe('RightPanelCustomerComponent', () => {
  let component: RightPanelCustomerComponent;
  let fixture: ComponentFixture<RightPanelCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPanelCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPanelCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
