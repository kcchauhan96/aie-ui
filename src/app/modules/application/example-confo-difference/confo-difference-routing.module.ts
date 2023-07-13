import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfoDifferenceComponent } from './confo-difference.component';

const routes: Routes = [
  {
    path: '',
    component: ConfoDifferenceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
