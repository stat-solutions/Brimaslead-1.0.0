import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDeskHeaderComponent } from './front-desk-header.component';

describe('FrontDeskHeaderComponent', () => {
  let component: FrontDeskHeaderComponent;
  let fixture: ComponentFixture<FrontDeskHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontDeskHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontDeskHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
