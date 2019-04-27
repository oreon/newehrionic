import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ChronicConditionService } from '../chronicCondition.service';

@Component({
selector: 'app-chronicCondition-details',
    templateUrl: './chronicCondition-view.component.html',
styleUrls: ['./chronicCondition-view.component.scss'],
})
export class ChronicConditionView implements OnInit {
    entity = null
    id = null;

    constructor(private activatedRoute: ActivatedRoute,
    private chronicConditionService: ChronicConditionService) { }

    ngOnInit() {
        //super.init()
        // Get the ID that was passed with the URL
        this.id = this.activatedRoute.snapshot.paramMap.get('id');

        // Get the information from the API
        this.chronicConditionService.get(this.id).subscribe(result => {
        this.entity = result;
        });
    }


}