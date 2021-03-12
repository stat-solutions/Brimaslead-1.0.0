import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignCreativeReportsComponent } from './design-creative-reports.component';

describe('DesignCreativeReportsComponent', () => {
  let component: DesignCreativeReportsComponent;
  let fixture: ComponentFixture<DesignCreativeReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignCreativeReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignCreativeReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
