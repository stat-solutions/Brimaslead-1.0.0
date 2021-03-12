import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneRfqsComponent } from './phone-rfqs.component';

describe('PhoneRfqsComponent', () => {
  let component: PhoneRfqsComponent;
  let fixture: ComponentFixture<PhoneRfqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneRfqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneRfqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
