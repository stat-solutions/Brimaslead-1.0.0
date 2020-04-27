import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanelTransLogisticsComponent } from './right-panel-trans-logistics.component';

describe('RightPanelTransLogisticsComponent', () => {
  let component: RightPanelTransLogisticsComponent;
  let fixture: ComponentFixture<RightPanelTransLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPanelTransLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPanelTransLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
