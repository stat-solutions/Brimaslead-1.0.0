import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAndArchiveComponent } from './file-and-archive.component';

describe('FileAndArchiveComponent', () => {
  let component: FileAndArchiveComponent;
  let fixture: ComponentFixture<FileAndArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileAndArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileAndArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
