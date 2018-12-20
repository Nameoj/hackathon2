import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConsoComponent } from './page-conso.component';

describe('PageConsoComponent', () => {
  let component: PageConsoComponent;
  let fixture: ComponentFixture<PageConsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageConsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
