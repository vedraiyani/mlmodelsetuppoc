import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModelComponent } from './table-model.component';

describe('TableModelComponent', () => {
  let component: TableModelComponent;
  let fixture: ComponentFixture<TableModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
