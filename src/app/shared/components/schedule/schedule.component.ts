import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Schedule } from './schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ScheduleComponent implements OnInit {
  public sheduleArray: Object[];

  constructor(
    private _scheduleData: DataService
  ) {
    this.sheduleArray = [];
  }

  ngOnInit(): void {
    this._scheduleData.getData().subscribe((result: Schedule) => {
      this.sheduleArray = result.schedule;
    });
  }
}