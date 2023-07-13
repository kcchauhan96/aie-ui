import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfoDifferenceComponent } from './confo-difference.component';
import { TutorialRoutingModule } from './confo-difference-routing.module';



@NgModule({
  declarations: [
    ConfoDifferenceComponent
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule
  ],
  exports:[
    ConfoDifferenceComponent
  ]
})
export class ExampleConfoDifferenceModule { }
