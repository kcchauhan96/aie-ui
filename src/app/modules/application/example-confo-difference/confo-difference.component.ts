import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/seo/api.service';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-confo-difference',
  templateUrl: './confo-difference.component.html',
  styleUrls: ['./confo-difference.component.css']
})
export class ConfoDifferenceComponent implements OnInit{

  fileData:any;
  tradeSelected: number = 0;

  constructor(private router: Router,
    private apiService: ApiService,
    private commonService: SeoService){
  }
  ngOnInit(): void {
    this.tradeSelected = this.commonService.getSelectedTrade();
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
