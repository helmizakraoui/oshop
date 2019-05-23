import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories ;
  product = {};
  id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productService:ProductService) { 
    categoryService.getCategories().subscribe((result) => {
      this.categories = result;
      console.log(result);
    });
     this.id = this.route.snapshot.paramMap.get('id');
     if (this.id) this.productService.get(this.id).take(1).subscribe(p => this.product =p);
  }
  save(product){
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
  delete(){
    if (!confirm('Are you sure you want delete this product?'))return;
    
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
    
  }

  ngOnInit() {
  }

}
