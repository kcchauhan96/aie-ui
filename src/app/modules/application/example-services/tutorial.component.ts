import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface TradeDetails {
  tradeId: number;
  counterpartyName: string;
  tradeDate: string;
  effectiveDate: string;
  currency: string;
  noOfOptions: number;  
  strikePrice: number;
  index:string;
  maturityDate: string;  
  notional: number;
}

@Component({
  selector: 'app-example-services',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  filteredTradeDetails:TradeDetails[] = [];
  tradeDetails:TradeDetails[] = [];
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.tradeDetails = [{
      tradeId: 124858,
      counterpartyName: 'Columbia Bank',
      tradeDate: '09/18/2008',
      effectiveDate: '09/20/2008',
      currency: 'XPT',
      noOfOptions: 182,  
      strikePrice: 589.97,
      index:'BNY',
      maturityDate: '05/07/2023',  
      notional: 214749.08 
  },
  {
    tradeId: 124859,
    counterpartyName: 'Columbia Bank',
    tradeDate: '09/18/2008',
    effectiveDate: '09/20/2008',
    currency: 'XPT',
    noOfOptions: 182,  
    strikePrice: 589.97,
    index:'BNY',
    maturityDate: '05/07/2023',  
    notional: 214749.08 
}
  ];
  }

  goBack(){
    this.router.navigate(['/landing-page']);
  }
  
  filterResults(text: string) {
    if (!text) {
      this.filteredTradeDetails = this.tradeDetails;
    }
  
    this.filteredTradeDetails = this.tradeDetails.filter(
      tradeDetails => tradeDetails?.tradeId.toString().toLowerCase().includes(text.toLowerCase())
    );
  }

}
