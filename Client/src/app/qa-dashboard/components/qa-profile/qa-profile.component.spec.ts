import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaProfileComponent } from './qa-profile.component';

describe('QaProfileComponent', () => {
  let component: QaProfileComponent;
  let fixture: ComponentFixture<QaProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
