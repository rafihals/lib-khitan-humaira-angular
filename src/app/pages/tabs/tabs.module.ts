import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { XFooterComponent } from '../../constant-html/x-footer/x-footer.component'; // Provide the correct relative path here
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    // SharedModule
  ],
  declarations: [TabsPage,XFooterComponent],
})
export class TabsPageModule {}
