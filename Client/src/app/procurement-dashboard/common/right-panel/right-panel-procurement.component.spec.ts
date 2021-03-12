import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanelProcurementComponent } from './right-panel-procurement.component';

describe('RightPanelProcurementComponent', () => {
  let component: RightPanelProcurementComponent;
  let fixture: ComponentFixture<RightPanelProcurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPanelProcurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPanelProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
