import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDeskLeftPanelComponent } from './front-desk-left-panel.component';

describe('FrontDeskLeftPanelComponent', () => {
  let component: FrontDeskLeftPanelComponent;
  let fixture: ComponentFixture<FrontDeskLeftPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontDeskLeftPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontDeskLeftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
