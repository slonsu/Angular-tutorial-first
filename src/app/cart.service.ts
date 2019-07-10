import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    items = new Set();
    constructor() {
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
}
