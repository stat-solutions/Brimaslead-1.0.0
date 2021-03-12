import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDeskProfileComponent } from './front-desk-profile.component';

describe('FrontDeskProfileComponent', () => {
  let component: FrontDeskProfileComponent;
  let fixture: ComponentFixture<FrontDeskProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontDeskProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontDeskProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
