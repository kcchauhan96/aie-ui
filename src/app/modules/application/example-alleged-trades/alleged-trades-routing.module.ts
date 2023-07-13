import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllegedTradesComponent } from './alleged-trades.component';
import { TutorialComponent } from '../example-components/tutorial.component';

const routes: Routes = [
  {
    path: '',
    component: AllegedTradesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
