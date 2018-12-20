import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementAchatComponent } from './classement-achat.component';

describe('ClassementAchatComponent', () => {
  let component: ClassementAchatComponent;
  let fixture: ComponentFixture<ClassementAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassementAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassementAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
