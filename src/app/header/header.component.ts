import {
  Component,
  ElementRef,
  Injectable,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChangecurrencyService } from '../services/changecurrency.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  selectedOption1: string = '';
  selectedOption2: string = '';

  basicCurrency = ['USD', 'UAH', 'EUR'];

  inputValue: number = 0;

  sum: number = 0;

  public getCurrency: any;
  usd: any;
  eur: any;
  uah: any;

  constructor(private ChangecurrencyService: ChangecurrencyService) {}

  ngOnInit(): void {
    this.ChangecurrencyService.getAll().subscribe((currency) => {
      this.getCurrency = currency;
      this.usd = this.getCurrency[24].rate;
      this.eur = this.getCurrency[31].rate;
    });
  }

  ngDoCheck() {
    for (let i = 0; i < this.basicCurrency.length; i++) {
      if (
        this.selectedOption1 == this.basicCurrency[i] &&
        this.selectedOption2 == this.basicCurrency[i] &&
        this.inputValue > 0
      ) {
        this.sum = 1 * this.inputValue;
      } else {
        if (
          this.selectedOption1 == this.basicCurrency[i] &&
          this.selectedOption2 == this.basicCurrency[i]
        ) {
          this.sum = 1;
        }
      }
    }

    if (this.selectedOption1 == 'USD' && this.selectedOption2 == 'EUR') {
      this.sum = (this.eur / this.usd) * this.inputValue;
    }
    if (this.selectedOption1 == 'USD' && this.selectedOption2 == 'UAH') {
      this.sum = (this.usd / 1) * this.inputValue;
    }
    if (this.selectedOption1 == 'UAH' && this.selectedOption2 == 'USD') {
      this.sum = (1 / this.usd) * this.inputValue;
    }
    if (this.selectedOption1 == 'UAH' && this.selectedOption2 == 'EUR') {
      this.sum = (1 / this.eur) * this.inputValue;
    }
    if (this.selectedOption1 == 'EUR' && this.selectedOption2 == 'UAH') {
      this.sum = (this.eur / 1) * this.inputValue;
    }
    if (this.selectedOption1 == 'EUR' && this.selectedOption2 == 'USD') {
      this.sum = (this.usd / this.eur) * this.inputValue;
    }
  }
}
