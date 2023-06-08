import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBooksPageRoutingModule } from './update-books-routing.module';

import { UpdateBooksPage } from './update-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBooksPageRoutingModule
  ],
  declarations: [UpdateBooksPage]
})
export class UpdateBooksPageModule {}
