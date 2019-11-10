import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dm-footer',
  templateUrl: './dm-footer.component.html',
  styleUrls: ['./dm-footer.component.scss']
})
export class DmFooterComponent implements OnInit {
  public currYear;

  ngOnInit(): void {
    this.currYear = new Date().getFullYear();
  }
}
