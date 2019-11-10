import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlockTitleModule } from '../shared/components/block-title/block-title.module';
import { CarouselModule } from '../shared/components/carousel/carousel.module';
import { ScheduleModule } from '../shared/components/schedule/schedule.module';
import { YoutubeVideoModule } from '../shared/components/youtube-video/youtube-video.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HomeComponent } from './home.component';
import { ROUTES } from './home.routes';

@NgModule({
  declarations: [
    HomeComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    BlockTitleModule,
    YoutubeVideoModule,
    CarouselModule,
    ScheduleModule,
    RouterModule.forChild(ROUTES)
  ]
})

export class HomeModule { }