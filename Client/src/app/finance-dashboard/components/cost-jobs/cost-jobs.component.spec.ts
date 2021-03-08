import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostJobsComponent } from './cost-jobs.component';

describe('CostJobsComponent', () => {
  let component: CostJobsComponent;
  let fixture: ComponentFixture<CostJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
