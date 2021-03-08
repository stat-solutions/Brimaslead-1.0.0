import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransLogisticsReportsComponent } from './trans-logistics-reports.component';

describe('TransLogisticsReportsComponent', () => {
  let component: TransLogisticsReportsComponent;
  let fixture: ComponentFixture<TransLogisticsReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransLogisticsReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransLogisticsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
