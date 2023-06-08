import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CetakbayarPageRoutingModule } from './cetakbayar-routing.module';

import { CetakbayarPage } from './cetakbayar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CetakbayarPageRoutingModule
  ],
  declarations: [CetakbayarPage]
})
export class CetakbayarPageModule {}
