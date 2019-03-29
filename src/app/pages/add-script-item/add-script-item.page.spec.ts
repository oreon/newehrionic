import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScriptItemPage } from './add-script-item.page';

describe('AddScriptItemPage', () => {
  let component: AddScriptItemPage;
  let fixture: ComponentFixture<AddScriptItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScriptItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScriptItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
