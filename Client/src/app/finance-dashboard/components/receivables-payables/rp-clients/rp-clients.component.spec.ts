import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpClientsComponent } from './rp-clients.component';

describe('RpClientsComponent', () => {
  let component: RpClientsComponent;
  let fixture: ComponentFixture<RpClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
