import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBooksPageRoutingModule } from './create-books-routing.module';

import { CreateBooksPage } from './create-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBooksPageRoutingModule
  ],
  declarations: [CreateBooksPage]
})
export class CreateBooksPageModule {}
