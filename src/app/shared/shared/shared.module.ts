// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XFooterComponent } from 'src/app/constant-html/x-footer/x-footer.component';
@NgModule({
  declarations: [XFooterComponent],
  imports: [CommonModule],
  exports: [XFooterComponent]
})
export class SharedModule { }
