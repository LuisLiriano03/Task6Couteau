import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdadPageRoutingModule } from './edad-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { EdadPage } from './edad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EdadPageRoutingModule
  ],
  declarations: [EdadPage]
})
export class EdadPageModule {}
