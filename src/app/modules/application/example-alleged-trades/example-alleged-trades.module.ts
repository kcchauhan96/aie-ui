import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllegedTradesComponent } from './alleged-trades.component';
import { TutorialRoutingModule } from './alleged-trades-routing.module';




@NgModule({
  declarations: [
    AllegedTradesComponent
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule
  ],
  exports:[
    AllegedTradesComponent
  ]
})
export class ExampleAllegedTradesModule { }
