import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersServiceProvidersComponent } from './suppliers-service-providers.component';

describe('SuppliersServiceProvidersComponent', () => {
  let component: SuppliersServiceProvidersComponent;
  let fixture: ComponentFixture<SuppliersServiceProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersServiceProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersServiceProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
