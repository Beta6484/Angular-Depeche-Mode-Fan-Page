import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-title',
  templateUrl: './block-title.component.html',
  styleUrls: ['./block-title.component.scss']
})
export class BlockTitleComponent {
  @Input() icon: string;
  @Input() title: string;
}
