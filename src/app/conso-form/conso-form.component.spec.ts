import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoFormComponent } from './conso-form.component';

describe('ConsoFormComponent', () => {
  let component: ConsoFormComponent;
  let fixture: ComponentFixture<ConsoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
