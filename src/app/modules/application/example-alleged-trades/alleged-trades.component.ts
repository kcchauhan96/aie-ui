import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from 'src/app/services/seo/seo.service';

export interface ConfoTradeDetails {
  tradeId: number;
  buyAmount: number;
  sellAmount:number;
  buyCurrency:string;
  sellCurrency:string;
  cptyName: string;  
  confidencePercentage: number;
}

@Component({
  selector: 'app-alleged-trades',
  templateUrl: './alleged-trades.component.html',
  styleUrls: ['./alleged-trades.component.css']
})
export class AllegedTradesComponent implements OnInit {
  confoTrades:ConfoTradeDetails[] = [];
  selectedConfo: string = '';
  confoList: string[] = [];
  constructor(private router: Router,
    private commonService: SeoService){
  }
  ngOnInit(): void {
    this.selectedConfo = this.commonService.getSelectedConfo();
    console.log(this.selectedConfo);
    this.confoTrades = [{
        tradeId: 12345,
        buyAmount: 0,
        sellAmount: 0,
        buyCurrency: '',
        sellCurrency: '',
        cptyName: '',
        confidencePercentage:85,
    },
    {
        tradeId: 2131,
        buyAmount: 0,
        sellAmount: 0,
        buyCurrency: '',
        sellCurrency: '',
        cptyName: '',
        confidencePercentage:89
    },
    {
        tradeId: 3242,
        buyAmount: 0,
        sellAmount: 0,
        buyCurrency: '',
        sellCurrency: '',
        cptyName: '',
        confidencePercentage:80
    },
    {
        tradeId: 645645,
        buyAmount: 0,
        sellAmount: 0,
        buyCurrency: '',
        sellCurrency: '',
        cptyName: '',
        confidencePercentage:64
      },
    {
        tradeId: 123,
        buyAmount: 0,
        sellAmount: 0,
        buyCurrency: '',
        sellCurrency: '',
        cptyName: '',
        confidencePercentage: 98
    }];
    this.confoList = ['confo1.pdf','confo2.pdf','confo3.pdf','confo4.pdf','confo5.pdf','confo6.pdf'];
  }

  goBack(){
    this.router.navigate(['/confo-details']);
  }

  goToPdfComparison(selectedTrade:number){
    this.commonService.setSelectedTrade(selectedTrade);
    this.router.navigate(['/confo-difference']);
  }

}
