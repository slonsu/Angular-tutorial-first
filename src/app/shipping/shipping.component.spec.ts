import {ShippingComponent} from './shipping.component';
import { ShippingService } from './../shipping.service';
import { HttpClient } from '@angular/common/http';

describe('Testing ShippingComponent', () => {
  let http: HttpClient;
  let shippingService = new ShippingService(http);
  let shippingComponent = new ShippingComponent(shippingService);

  it('selectShipping should call setShipping', () => {
    const value = 'None';
    shippingComponent.selectShipping(value);
    expect(shippingService.type).toBe('None');
  });
});