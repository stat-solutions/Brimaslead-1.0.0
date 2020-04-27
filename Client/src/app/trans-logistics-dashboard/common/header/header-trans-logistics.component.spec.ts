import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTransLogisticsComponent } from './header-trans-logistics.component';

describe('HeaderTransLogisticsComponent', () => {
  let component: HeaderTransLogisticsComponent;
  let fixture: ComponentFixture<HeaderTransLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTransLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTransLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
