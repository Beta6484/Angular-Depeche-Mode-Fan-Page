import { Component } from '@angular/core';

@Component({
  selector: 'app-dm-header',
  templateUrl: './dm-header.component.html',
  styleUrls: ['./dm-header.component.scss']
})

export class DmHeaderComponent {
  public showMenu: boolean = false;
  public activatedLink: number = 0;

  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  public activateLink(valor) {
    this.activatedLink = valor;
  }
}