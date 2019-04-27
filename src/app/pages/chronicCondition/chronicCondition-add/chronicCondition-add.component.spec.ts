import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  chronicConditionFactory } from '../chronicCondition';

import { ChronicConditionAddComponent } from './chronicCondition-add.component';


import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

describe('ChronicConditionAddComponent', () => {
let component: ChronicConditionAddComponent;
let fixture: ComponentFixture<ChronicConditionAddComponent>;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ ChronicConditionAddComponent ],
        imports: [ReactiveFormsModule, FormsModule,NgbModule.forRoot(), NgSelectModule],

    })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChronicConditionAddComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        this.entity = chronicConditionFactory.build();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.getForm().valid).toBeFalsy();
    });

    it('form valid when editing existing', () => {
        component.entity = this.entity
        fixture.detectChanges();
        expect(component.getForm().valid).toBeTruthy();
    });



    it('submitting a form emits a valid entity', () => {
        expect(component.getForm().valid).toBeFalsy();

component.getForm().controls['name'].setValue(this.entity.name)

        expect(component.getForm().valid).toBeTruthy();

        component.stepComplete.subscribe((emitted:any) => {
expect(emitted.name).toBe(this.entity.name);
        });

        // Trigger the login function
        component.submit();
    });
});