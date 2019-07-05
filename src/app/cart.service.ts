import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    items = new Set();
    constructor(private http: HttpClient) {
    }

    addToCart(product) {
        this.items.add(product);
    }

    getItems() {
        return this.items;
    }

    deleteItem(data) {
        this.items.delete(data);
    }

    getShippingCosts() {
        return this.http.get('/assets/shipping.json');
    }
}
