import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoScenarioTableComponent } from './demo-scenario-table.component';

describe('DemoScenarioTableComponent', () => {
  let component: DemoScenarioTableComponent;
  let fixture: ComponentFixture<DemoScenarioTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoScenarioTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoScenarioTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
