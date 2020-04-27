import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSuppliersComponent } from './header-suppliers.component';

describe('HeaderSuppliersComponent', () => {
  let component: HeaderSuppliersComponent;
  let fixture: ComponentFixture<HeaderSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
