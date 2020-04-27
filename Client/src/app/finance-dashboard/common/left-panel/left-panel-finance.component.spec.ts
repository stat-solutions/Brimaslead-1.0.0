import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelFinanceComponent } from './left-panel-finance.component';

describe('LeftPanelFinanceComponent', () => {
  let component: LeftPanelFinanceComponent;
  let fixture: ComponentFixture<LeftPanelFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
