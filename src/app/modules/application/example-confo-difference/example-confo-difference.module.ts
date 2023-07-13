import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfoDifferenceComponent } from './confo-difference.component';
import { TutorialRoutingModule } from './confo-difference-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';



@NgModule({
  declarations: [
    ConfoDifferenceComponent
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule
  ],
  exports:[
    ConfoDifferenceComponent
  ]
})
export class ExampleConfoDifferenceModule { }
