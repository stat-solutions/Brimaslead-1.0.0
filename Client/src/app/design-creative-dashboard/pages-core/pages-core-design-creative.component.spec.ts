import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagesCoreDesignCreativeComponent } from './pages-core-design-creative.component';


describe('PagesCoreDesignCreativeComponent', () => {
  let component: PagesCoreDesignCreativeComponent;
  let fixture: ComponentFixture<PagesCoreDesignCreativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCoreDesignCreativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCoreDesignCreativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
