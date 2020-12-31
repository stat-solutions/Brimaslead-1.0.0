import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationProfileComponent } from './administration-profile.component';

describe('AdministrationProfileComponent', () => {
  let component: AdministrationProfileComponent;
  let fixture: ComponentFixture<AdministrationProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
