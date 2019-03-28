import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScriptPage } from './add-script.page';

describe('AddScriptPage', () => {
  let component: AddScriptPage;
  let fixture: ComponentFixture<AddScriptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScriptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
