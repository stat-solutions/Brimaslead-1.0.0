import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRfqComponent } from './edit-rfq.component';

describe('EditRfqComponent', () => {
  let component: EditRfqComponent;
  let fixture: ComponentFixture<EditRfqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRfqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRfqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
