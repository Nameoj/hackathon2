import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefipersoComponent } from './defiperso.component';

describe('DefipersoComponent', () => {
  let component: DefipersoComponent;
  let fixture: ComponentFixture<DefipersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefipersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefipersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
