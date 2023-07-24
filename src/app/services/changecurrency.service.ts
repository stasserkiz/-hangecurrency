import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ChangecurrencyService {
  private currencyUrl =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.http.get(this.currencyUrl);
  }
}
