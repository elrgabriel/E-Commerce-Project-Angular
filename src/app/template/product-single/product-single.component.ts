import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectProductService } from '../../services/select-product.service';

@Component({
  selector: 'app-product-single',
  standalone: false,
  
  templateUrl: './product-single.component.html',
  styleUrl: './product-single.component.css'
})
export class ProductSingleComponent implements OnInit {

  product: any;

  constructor(private selectedProduct: SelectProductService, private router: Router) { }
  
  ngOnInit(): void {
    this.product = this.selectedProduct.getProduct()

    if (!this.product) {
      this.router.navigate(['/home-page'])
    }
  }

}
