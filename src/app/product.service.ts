import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product){
    this.db.list('/products').push(product);
  }
  getAll(){
    var products = this.db.list('/products');
    console.log(products);
    return products;
  }

 get(productId)
 {
   return this.db.object('/products/' + productId);
 }
update(productId, product){
  return this.db.object('/products/' + productId).update(product);
}
delete (productId){
  return this.db.object('/products/' + productId).remove();
}
}
