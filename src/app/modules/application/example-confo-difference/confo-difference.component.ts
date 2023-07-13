import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/seo/api.service';
import { SeoService } from 'src/app/services/seo/seo.service';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-confo-difference',
  templateUrl: './confo-difference.component.html',
  styleUrls: ['./confo-difference.component.css']
})
export class ConfoDifferenceComponent implements OnInit{

  fileData:any;
  tradeSelected: number = 0;
  pdfFilePath1:string = '';
  pdfFilePath2:string = '';

  constructor(private router: Router,
    private apiService: ApiService,
    private commonService: SeoService){
      pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }
  ngOnInit(): void {
    this.tradeSelected = this.commonService.getSelectedTrade();
    this.pdfFilePath1 = './assets/pdfs/confo1.pdf';
    this.pdfFilePath2 = './assets/pdfs/confo2.pdf';
    this.getPDFs();
  }

  getPDFs() {
    this.apiService.getComparisonPdf().subscribe((data:any)=> {
      this.fileData = data.file;
    });
    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
  }
  goBack(){
    this.router.navigate(['/alleged-trades']);
  }
}
