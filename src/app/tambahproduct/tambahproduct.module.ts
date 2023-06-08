import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahproductPageRoutingModule } from './tambahproduct-routing.module';

import { TambahproductPage } from './tambahproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahproductPageRoutingModule
  ],
  declarations: [TambahproductPage]
})
export class TambahproductPageModule {}
