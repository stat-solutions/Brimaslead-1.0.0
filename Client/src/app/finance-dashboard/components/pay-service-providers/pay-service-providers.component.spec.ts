import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayServiceProvidersComponent } from './pay-service-providers.component';

describe('PayServiceProvidersComponent', () => {
  let component: PayServiceProvidersComponent;
  let fixture: ComponentFixture<PayServiceProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayServiceProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayServiceProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
