import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { DmFooterComponent } from './dm-footer/dm-footer.component';
import { DmHeaderComponent } from './dm-header/dm-header.component';

@NgModule({
  declarations: [
    DmHeaderComponent, 
    DmFooterComponent
  ],
  exports: [
    DmHeaderComponent, 
    DmFooterComponent
  ],
  imports: [
    CommonModule,
    ScrollToModule
  ]
})

export class CoreModule { }