import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';


@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class YoutubeVideoComponent implements OnInit {
  public safeUrl: any;
  public aspcPercent: string = '56.25%';
  @Input() id: string;
  @Input() aspcRatio: string = '16:9';

  constructor(
    private _embedVideoService: EmbedVideoService,
  ) { }

  ngOnInit(): void {
    this.safeUrl = this._embedVideoService.embed_youtube(this.id);
    switch (this.aspcRatio) {
      case  '1:1':
        this.aspcPercent = '100%';
        break;
      case  '16:9':
        this.aspcPercent = '56.25%';
        break;
      case  '4:3':
        this.aspcPercent = '75%';
        break;
      case  '3:2':
        this.aspcPercent = '66.66%%';
        break;
      case  '8:5':
        this.aspcPercent = '62.5%';
        break;
    }
  }
}
