import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsVerificationComponent } from './items-verification.component';

describe('ItemsVerificationComponent', () => {
  let component: ItemsVerificationComponent;
  let fixture: ComponentFixture<ItemsVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
