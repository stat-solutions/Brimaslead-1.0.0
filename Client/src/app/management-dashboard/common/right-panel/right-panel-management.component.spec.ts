import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanelManagementComponent } from './right-panel-management.component';

describe('RightPanelManagementComponent', () => {
  let component: RightPanelManagementComponent;
  let fixture: ComponentFixture<RightPanelManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPanelManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPanelManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
