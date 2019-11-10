import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YoutubeVideoComponent } from './youtube-video.component';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';

@NgModule({
  declarations: [
    YoutubeVideoComponent
  ],
  exports: [
    YoutubeVideoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EmbedVideo
  ]
})

export class YoutubeVideoModule { }