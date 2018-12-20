import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChangementComponent } from './page-changement.component';

describe('PageChangementComponent', () => {
  let component: PageChangementComponent;
  let fixture: ComponentFixture<PageChangementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChangementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
