import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptsPage } from './scripts.page';

describe('ScriptsPage', () => {
  let component: ScriptsPage;
  let fixture: ComponentFixture<ScriptsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
