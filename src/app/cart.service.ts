import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    items = [];
    constructor(private http: HttpClient) {
    }

    addToCart(product) {
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    deleteItem(data) {
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i] = data){
                this.items.splice(i, 1);
            }
        }
    }

    clearCart() {
        this.items = [];
        return this.items;
    }

    getShippingCosts() {
        return this.http.get('/assets/shipping.json');
    }
}
