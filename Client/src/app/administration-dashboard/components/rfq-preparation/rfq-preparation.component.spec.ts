import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqPreparationComponent } from './rfq-preparation.component';

describe('RfqPreparationComponent', () => {
  let component: RfqPreparationComponent;
  let fixture: ComponentFixture<RfqPreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfqPreparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfqPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
