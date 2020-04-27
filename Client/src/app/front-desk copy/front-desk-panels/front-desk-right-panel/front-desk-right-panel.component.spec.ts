import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDeskRightPanelComponent } from './front-desk-right-panel.component';

describe('FrontDeskRightPanelComponent', () => {
  let component: FrontDeskRightPanelComponent;
  let fixture: ComponentFixture<FrontDeskRightPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontDeskRightPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontDeskRightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
