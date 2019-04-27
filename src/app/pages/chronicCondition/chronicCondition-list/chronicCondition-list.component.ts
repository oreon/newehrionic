
import { Component, OnInit } from "@angular/core";
import { ChronicConditionService } from "../chronicCondition.service";
import { Observable } from "rxjs";
import { BaseListPage } from "../../../base/base-list-page";
import { ActivatedRoute } from "@angular/router";

import { ChronicCondition } from '../../../entities/chronic-condition.model';

@Component({
selector: "app-chronicConditions",
templateUrl: "./chronicCondition-list.component.html",
styleUrls: ["./chronicCondition-list.component.scss"]
})
export class ChronicConditionListPage extends BaseListPage<ChronicCondition> implements OnInit {
results: Observable<any>;
    searchTerm: string = "";
    searchOnserver = true;
    //type: SearchType = SearchType.all;

    /**
    * Constructor of our first page
    * @param movieService The movie Service to get data
    */
    constructor(
    protected chronicConditionService: ChronicConditionService,
    protected activatedRoute: ActivatedRoute
    ) {
    super(chronicConditionService, activatedRoute);
    }



    }
