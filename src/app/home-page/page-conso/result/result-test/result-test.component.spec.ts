import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTestComponent } from './result-test.component';

describe('ResultTestComponent', () => {
  let component: ResultTestComponent;
  let fixture: ComponentFixture<ResultTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
