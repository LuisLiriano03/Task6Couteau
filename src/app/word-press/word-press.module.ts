import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordPressPageRoutingModule } from './word-press-routing.module';

import { WordPressPage } from './word-press.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordPressPageRoutingModule
  ],
  declarations: [WordPressPage]
})
export class WordPressPageModule {}
