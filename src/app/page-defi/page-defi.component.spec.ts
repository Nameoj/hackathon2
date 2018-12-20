import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefiComponent } from './page-defi.component';

describe('PageDefiComponent', () => {
  let component: PageDefiComponent;
  let fixture: ComponentFixture<PageDefiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDefiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
