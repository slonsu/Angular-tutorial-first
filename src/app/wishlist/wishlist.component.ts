import { Component, OnInit } from '@angular/core';
import { WishlistService } from './../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  items;

  constructor(private wishlistService: WishlistService) {
    this.items = this.wishlistService.getItems();
  }

  ngOnInit() {
  }

  remove(data) {
    this.wishlistService.deleteItem(data);
    this.items = this.wishlistService.getItems();
  }

}
