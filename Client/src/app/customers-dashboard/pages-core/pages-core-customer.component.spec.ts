import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesCoreCustomerComponent } from './pages-core-customer.component';


describe('PagesCoreComponent', () => {
  let component: PagesCoreCustomerComponent;
  let fixture: ComponentFixture<PagesCoreCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCoreCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCoreCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
