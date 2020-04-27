import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelManagementComponent } from './left-panel-management.component';

describe('LeftPanelManagementComponent', () => {
  let component: LeftPanelManagementComponent;
  let fixture: ComponentFixture<LeftPanelManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
