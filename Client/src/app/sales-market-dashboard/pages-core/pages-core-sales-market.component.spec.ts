import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesCoreSalesMarketComponent } from './pages-core-sales-market.component';


describe('PagesCoreSalesMarketComponent', () => {
  let component: PagesCoreSalesMarketComponent;
  let fixture: ComponentFixture<PagesCoreSalesMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCoreSalesMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCoreSalesMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
