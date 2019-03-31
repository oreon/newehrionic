import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeasurementPage } from './add-measurement.page';

describe('AddMeasurementPage', () => {
  let component: AddMeasurementPage;
  let fixture: ComponentFixture<AddMeasurementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMeasurementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeasurementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
