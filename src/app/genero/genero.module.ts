import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneroPageRoutingModule } from './genero-routing.module';

import { GeneroPage } from './genero.page';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneroPageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: GeneroPage
      }
    ]),
  ],
  declarations: [GeneroPage]
})
export class GeneroPageModule {}
