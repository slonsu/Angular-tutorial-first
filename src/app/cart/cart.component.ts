import {Component, OnInit} from '@angular/core';

import {CartService} from './../cart.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  items;
  checkedForm;

  constructor(private cartService: CartService,
              private formBuilder: FormBuilder) {
      this.items = this.cartService.getItems();
      this.checkedForm = formBuilder.group({
        name: '',
        address: ''
      });
  }

  ngOnInit() {
  }

  remove(data) {
    this.cartService.deleteItem(data);
    this.items = this.cartService.getItems();
  }

  // 6-reactive-forms-managing-values

  onSubmit(data) {
    console.log(data);
    this.checkedForm.reset();
  }

  resetForm() {
    this.checkedForm.patchValue({
      name: 'Roman'
    });
  }

  // 7-Reactive-forms-advanced-managing-values
}
