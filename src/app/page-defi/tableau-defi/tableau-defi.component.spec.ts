import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDefiComponent } from './tableau-defi.component';

describe('TableauDefiComponent', () => {
  let component: TableauDefiComponent;
  let fixture: ComponentFixture<TableauDefiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauDefiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauDefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
