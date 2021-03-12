import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDeskReportsComponent } from './front-desk-reports.component';

describe('FrontDeskReportsComponent', () => {
  let component: FrontDeskReportsComponent;
  let fixture: ComponentFixture<FrontDeskReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontDeskReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontDeskReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
