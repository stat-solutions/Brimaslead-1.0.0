import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivablesPayablesComponent } from './receivables-payables.component';

describe('ReceivablesPayablesComponent', () => {
  let component: ReceivablesPayablesComponent;
  let fixture: ComponentFixture<ReceivablesPayablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivablesPayablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivablesPayablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
