import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScheduleComponent } from './schedule.component';
import { AccordionModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    ScheduleComponent
  ],
  exports: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    AccordionModule
  ]
})

export class ScheduleModule { }