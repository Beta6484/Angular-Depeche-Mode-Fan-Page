import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Carousel } from './carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public carouselArray: object[];
  public selectedIndex: number = 0;

  constructor(
    private _carouselData: DataService
  ) {
    this.carouselArray = [];
  }

  ngOnInit(): void {
    this._carouselData.getData().subscribe((result: Carousel) => {
      this.carouselArray = result.carousel;
    });
  }

  public itemSelected(x: number, dir: string) {
    if (dir == 'left' && this.selectedIndex == 0) {
      x = this.carouselArray.length - 1;
    } else if (dir == 'right' && this.selectedIndex == this.carouselArray.length - 1) {
      x = 0;
    }
    this.downSelected(x);
    this.selectedIndex = x;
  }

  public downSelected(i: number) {
    this.selectedIndex = this.selectedIndex + 1;
  }
}
