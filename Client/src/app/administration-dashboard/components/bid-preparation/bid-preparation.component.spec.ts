import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidPreparationComponent } from './bid-preparation.component';

describe('BidPreparationComponent', () => {
  let component: BidPreparationComponent;
  let fixture: ComponentFixture<BidPreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidPreparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
