import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelTransLogisticsComponent } from './left-panel-trans-logistics.component';

describe('LeftPanelTransLogisticsComponent', () => {
  let component: LeftPanelTransLogisticsComponent;
  let fixture: ComponentFixture<LeftPanelTransLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelTransLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelTransLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
