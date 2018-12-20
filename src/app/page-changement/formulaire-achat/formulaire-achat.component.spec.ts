import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAchatComponent } from './formulaire-achat.component';

describe('FormulaireAchatComponent', () => {
  let component: FormulaireAchatComponent;
  let fixture: ComponentFixture<FormulaireAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
