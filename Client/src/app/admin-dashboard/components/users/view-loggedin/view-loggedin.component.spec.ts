import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoggedinComponent } from './view-loggedin.component';

describe('ViewLoggedinComponent', () => {
  let component: ViewLoggedinComponent;
  let fixture: ComponentFixture<ViewLoggedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLoggedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
