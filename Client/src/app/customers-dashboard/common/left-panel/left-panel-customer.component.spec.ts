import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelCustomerComponent } from './left-panel-customer.component';

describe('LeftPanelCustomerComponent', () => {
  let component: LeftPanelCustomerComponent;
  let fixture: ComponentFixture<LeftPanelCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
