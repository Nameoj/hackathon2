import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementDefiComponent } from './classement-defi.component';

describe('ClassementDefiComponent', () => {
  let component: ClassementDefiComponent;
  let fixture: ComponentFixture<ClassementDefiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassementDefiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassementDefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
