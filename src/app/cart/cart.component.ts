import {Component, OnInit} from '@angular/core';

import {CartService} from './../cart.service';
import {FormBuilder, Validators, FormControl} from '@angular/forms';

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
        name: ['', [Validators.minLength(4), this.forbiddenName()]],
        address: formBuilder.group({
          street: '',
          city: '',
          state: '',
          zip: ''
        })
      });
  }

  // 9-reactive-forms-form-validation

  ngOnInit() {
  }

  forbiddenName() {
    return (formControl) => {
      return formControl.value === 'NotRoman' ? {forbidden: {invalid: true}} : null;
    }
  }

  remove(data) {
    this.cartService.deleteItem(data);
    this.items = this.cartService.getItems();
  }

  onSubmit(data) {
    console.log(data);
    this.checkedForm.reset();
  }

  resetForm() {
    this.checkedForm.patchValue({
      name: 'Roman'
    });
  }

  get name() {
    return this.checkedForm.get('name') as FormControl;
  }
}
