import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CartService {
    items = [];
    constructor() {
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
}
