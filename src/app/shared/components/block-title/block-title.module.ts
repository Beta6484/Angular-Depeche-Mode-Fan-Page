import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockTitleComponent } from './block-title.component';

@NgModule({
  declarations: [
    BlockTitleComponent
  ],
  exports: [
    BlockTitleComponent
  ],
  imports: [
    CommonModule
  ]
})

export class BlockTitleModule { }