import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

import { Channel } from './channel/channel';
import { Router } from '@angular/router';

export interface confoMatchDetails {
  confoPdf:any;
  tradeDetails: ConfoTradeDetails;
  status: string;
}

export interface ConfoTradeDetails {
  tradeId: number;
  buyAmount: number;
  sellAmount:number;
  buyCurrency:string;
  sellCurrency:string;
  cptyName: string;  
}
@Component({
  selector: 'app-example-components',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  confoTrades: confoMatchDetails[] = [];
  constructor(private commonService: SeoService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.confoTrades = [{
      confoPdf:'confo1.pdf',
      tradeDetails: {
        tradeId: 12345,
        buyAmount: 0,
        sellAmount: 0,
        buyCurrency: '',
        sellCurrency: '',
        cptyName: '',
      },
      status:'AI Matched'
    },
    {
      confoPdf:'confo2.pdf',
      tradeDetails: {
        tradeId: 2131,
        buyAmount: 0,
        sellAmount: 0,
        buyCurrency: '',
        sellCurrency: '',
        cptyName: '',
      },
      status:'Could not Match'
    },
    {
      confoPdf:'confo3.pdf',
      tradeDetails: {
        tradeId: 3242,
        buyAmount: 0,
        sellAmount: 0,
        buyCurrency: '',
        sellCurrency: '',
        cptyName: '',
      },
      status:'AI Matched'
    },
    {
      confoPdf:'confo4.pdf',
      tradeDetails: {
        tradeId: 645645,
        buyAmount: 0,
        sellAmount: 0,
        buyCurrency: '',
        sellCurrency: '',
        cptyName: '',
      },
      status:'Yet to be matched'
    },
    {
      confoPdf:'confo5.pdf',
      tradeDetails: {
        tradeId: 123,
        buyAmount: 0,
        sellAmount: 0,
        buyCurrency: '',
        sellCurrency: '',
        cptyName: '',
      },
      status:'AI Matched'
    }];
  }

    goBack(){
      this.router.navigate(['/landing-page']);
    
    }

    routeToConfoDetails(selectedConfo:string){
      this.commonService.setSelectedConfo(selectedConfo);
      this.router.navigate(['/alleged-trades']);
    }

}

