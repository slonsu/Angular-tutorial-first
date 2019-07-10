import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  rates: Array<object> = [];
  length = 0;

  constructor(private currencyService: CurrencyService) { }
  currency1;
  currency2;
  rate1;
  rate2;

  ngOnInit() {
    const action = (value) => {
      this.rates.push(value);
    };
    const complete = () => {
      this.length = this.rates.length;
    };

    const filterCallback = ({value}) => value > 0;
    const mapCallback = ({rates}) => {
      const currency = Object.keys(rates)[0];
      const value = rates[currency];
      return {
        currency,
        value,
        icon: '💯😂🔫'
      };
    };

    const Observer = this.currencyService.Observer;
    Observer
      .pipe(
        map(mapCallback),
        filter(filterCallback)
      )
      .subscribe({
        next: action,
        complete
      });
  }

  selectCurrency1(value) {
    this.rate1 = value;
    this.updateCurrency2();
  }

  selectCurrency2(value) {
    this.rate2 = value;
    this.updateCurrency1();
  }

  setCurrency1(value) {
    this.currency1 = value;
    this.updateCurrency2();
  }

  setCurrency2(value) {
    this.currency2 = value;
    this.updateCurrency1();
  }

  updateCurrency2() {
    this.currency2 = this.currency1 * this.rate1;
  }

  updateCurrency1() {
    this.currency1 = this.currency2 * this.rate1;
  }
}
