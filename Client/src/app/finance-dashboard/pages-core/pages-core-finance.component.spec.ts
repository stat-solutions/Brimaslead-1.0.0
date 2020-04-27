import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesCoreFinanceComponent } from './pages-core-finance.component';


describe('PagesCoreComponent', () => {
  let component: PagesCoreFinanceComponent;
  let fixture: ComponentFixture<PagesCoreFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCoreFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCoreFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
