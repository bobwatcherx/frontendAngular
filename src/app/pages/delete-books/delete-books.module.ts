import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteBooksPageRoutingModule } from './delete-books-routing.module';

import { DeleteBooksPage } from './delete-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteBooksPageRoutingModule
  ],
  declarations: [DeleteBooksPage]
})
export class DeleteBooksPageModule {}
