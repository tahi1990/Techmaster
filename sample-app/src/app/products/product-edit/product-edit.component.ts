import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductControllerService } from 'src/swagger';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  id;
  product: Product;
  productForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productService : ProductControllerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      
      // this.productService.findProductUsingGET(this.id).subscribe(res => {
      //   this.product = res;
      //   this.createForm(this.product);
      // })
    });
  }

  private createForm(product: Product) {
    this.productForm = this.formBuilder.group({
      name: [product.name, [Validators.required, Validators.minLength(3)]],
      category: [product.category, Validators.required]
    });
  }

}
