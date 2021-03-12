import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesCoreProcurementComponent } from './pages-core-procurement.component';


describe('PagesCoreComponent', () => {
  let component: PagesCoreProcurementComponent;
  let fixture: ComponentFixture<PagesCoreProcurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCoreProcurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCoreProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
