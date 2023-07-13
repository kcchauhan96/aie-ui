import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private confoSelected: any = undefined;
  private tradeSelected: any = undefined;

  setSelectedConfo(confoSelected: any) {
    this.confoSelected = confoSelected;
  }

  getSelectedConfo(): any {
    return this.confoSelected;
  }

  setSelectedTrade(tradeSelected: any) {
    this.tradeSelected = tradeSelected;
  }

  getSelectedTrade(): any {
    return this.tradeSelected;
  }
  constructor() {

  }


}
