import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthClientsSuppliersComponent } from './auth-clients-suppliers.component';

describe('AuthClientsSuppliersComponent', () => {
  let component: AuthClientsSuppliersComponent;
  let fixture: ComponentFixture<AuthClientsSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthClientsSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthClientsSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
