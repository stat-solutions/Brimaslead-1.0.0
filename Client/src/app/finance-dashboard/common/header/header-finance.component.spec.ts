import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFinanceComponent } from './header-finance.component';

describe('HeaderFinanceComponent', () => {
  let component: HeaderFinanceComponent;
  let fixture: ComponentFixture<HeaderFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
