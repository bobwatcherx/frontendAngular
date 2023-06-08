import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditproductsayaPageRoutingModule } from './editproductsaya-routing.module';

import { EditproductsayaPage } from './editproductsaya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditproductsayaPageRoutingModule
  ],
  declarations: [EditproductsayaPage]
})
export class EditproductsayaPageModule {}
