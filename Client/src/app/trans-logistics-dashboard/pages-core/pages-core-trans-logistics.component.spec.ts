import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesCoreTransLogisticsComponent } from './pages-core-trans-logistics.component';


describe('PagesCoreTransLogisticsComponent', () => {
  let component: PagesCoreTransLogisticsComponent;
  let fixture: ComponentFixture<PagesCoreTransLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCoreTransLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCoreTransLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
