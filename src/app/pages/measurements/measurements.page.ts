import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  AfterViewInit,
  ChangeDetectorRef
} from "@angular/core";
import { MeasurementService } from "../../services/measurement.service";
import { ActivatedRoute } from "@angular/router";
import { BaseListPage } from "../../base/base-list-page";
import { Measurement } from "../../entities/measurmenet/measurement.model";
//import { Item } from 'ionic-angular';

import * as _ from "lodash";
import { Chart } from "chart.js";

@Component({
  selector: "app-measurements",
  templateUrl: "./measurements.page.html",
  styleUrls: ["./measurements.page.scss"]
})
export class MeasurementsPage extends BaseListPage<Measurement>
  implements OnInit, AfterViewInit {
  groups: any = [];

  @ViewChildren("lineCanvas") canvases;
  lineCharts: any = [];

  constructor(
    protected measurementService: MeasurementService,
    protected activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    super(measurementService, activatedRoute);
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.measurementService.getAll(+id).subscribe(x => {
      this.entities = x;

      this.groups = _(this.entities)
        .groupBy(y => y.measurementType)
        .map((v, key) => ({
          measurementType: key,
          vals: { values: _.map(v, "value"), dts: _.map(v, "created") }
        }))
        .value();

      console.log("groups", this.groups);
    });
  }

  ngOnInit() {}

  tab = 'charts';

  show(tab) {
    this.tab = tab;
    if( tab === 'charts')
      this.draw()
  }

  ngAfterViewInit(): void {
    //console.log('canvases in avi', this.canvases)
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //this.draw()
  }

  ionViewDidEnter() {
    console.log("view entered");
    this.draw();
  }

  ionViewWillEnter() {
    console.log("view will entered");
    this.draw();
  }

  ionViewWilLeave() {
    console.log("view will leave");
    this.draw();
  }

  ngAfterContentInit(): void {
    console.log("after content init");
    
  }

  draw() {
    let i = 0;
    //if(this.canvases.toArray().length === this.groups.length)
    //if(this.groups)
    this.groups.forEach(x => {
      this.lineCharts.push(
        new Chart(this.canvases.toArray()[i].nativeElement, {
          type: "line",
          data: {
            labels: x.vals.dts,
            datasets: [
              {
                data: x.vals.values,
                label: x.measurementType,
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                spanGaps: false
              }
            ]
          }
        })
      );
      i++;
      console.log(i);
    });

    // this.lineCharts.forEach(x => {
    //   x.update();
    // });
    // this.cdr.detectChanges();
  }

  searchFunction(x) {
    return x.description;
  }
}
