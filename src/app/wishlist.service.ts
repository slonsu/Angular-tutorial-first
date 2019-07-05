import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class WishlistService {
    items = new Set();
    constructor() {
    }

    addToWhishlist(product) {
        this.items.add(product);
    }

    getItems() {
        return this.items;
    }

    deleteItem(data) {
        this.items.delete(data);
    }
}
