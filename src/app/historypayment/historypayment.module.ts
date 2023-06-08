import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorypaymentPageRoutingModule } from './historypayment-routing.module';

import { HistorypaymentPage } from './historypayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorypaymentPageRoutingModule
  ],
  declarations: [HistorypaymentPage]
})
export class HistorypaymentPageModule {}
