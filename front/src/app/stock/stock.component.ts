import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  articles = [
    {
      name: 'Tournevis',
      price: 2.99,
      qty: 123,
    },
    {
      name: 'Tournevis cruciforme',
      price: 3.45,
      qty: 12,
    },
    {
      name: 'Tondeuse à gazon',
      price: 150,
      qty: 20,
    },
    {
      name: 'Marteau',
      price: 3.67,
      qty: 300,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
