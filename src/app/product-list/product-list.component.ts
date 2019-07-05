import {Component} from '@angular/core';
import {products} from '../products';
import {WishlistService} from './../wishlist.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent {
    products = products;

    constructor(
        private wishlistService: WishlistService
        ) { }

    share() {
        window.alert('the product has been shared');
    }

    onNotify() {
        window.alert('You will be gnomed');
    }

    addToWishList(product) {
        window.alert('Your product has been added!');
        this.wishlistService.addToWhishlist(product);
    }

    removeFromWishList(product) {
        window.alert('Your product has been removed!');
        this.wishlistService.deleteItem(product);
    }

    hide(product) {
        return  !this.wishlistService.items.has(product);
    }
}
