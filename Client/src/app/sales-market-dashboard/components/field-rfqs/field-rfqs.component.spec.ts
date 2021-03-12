import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldRfqsComponent } from './field-rfqs.component';

describe('FieldRfqsComponent', () => {
  let component: FieldRfqsComponent;
  let fixture: ComponentFixture<FieldRfqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldRfqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldRfqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
