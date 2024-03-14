import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordPressPage } from './word-press.page';

const routes: Routes = [
  {
    path: '',
    component: WordPressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordPressPageRoutingModule {}
