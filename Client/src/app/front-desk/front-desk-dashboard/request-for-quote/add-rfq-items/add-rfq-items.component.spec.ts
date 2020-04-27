import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRfqItemsComponent } from './add-rfq-items.component';

describe('AddRfqItemsComponent', () => {
  let component: AddRfqItemsComponent;
  let fixture: ComponentFixture<AddRfqItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRfqItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRfqItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
