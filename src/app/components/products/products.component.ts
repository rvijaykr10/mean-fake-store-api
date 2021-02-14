import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

import { Router } from '@angular/router';

import { Products } from '../../models/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Products[];
  loader: boolean = true;
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
      this.loader = false;
      // console.log(this.products);
    });
  }

  select(id: number) {
    this.router.navigate(['/products', id]);
  }
}
