import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransLogisticsProfileComponent } from './trans-logistics-profile.component';

describe('TransLogisticsProfileComponent', () => {
  let component: TransLogisticsProfileComponent;
  let fixture: ComponentFixture<TransLogisticsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransLogisticsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransLogisticsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
