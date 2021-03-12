import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignCreativeDashboardComponent } from './design-creative-dashboard.component';

describe('DesignCreativeDashboardComponent', () => {
  let component: DesignCreativeDashboardComponent;
  let fixture: ComponentFixture<DesignCreativeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignCreativeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignCreativeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
