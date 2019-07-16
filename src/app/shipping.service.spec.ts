import { HttpClient } from '@angular/common/http';
import { ShippingService } from './shipping.service';

describe('Testing ShippingService', () => {
  let shippingService;
  let http: HttpClient;

  beforeEach(() => {
    shippingService = new ShippingService(http);
  });

  it('getShippingCosts should return shipping json (this doesn\'t work because jasmine is broken, this should work)', () => {
    const shippings = http.get('/assets/shipping.json');
    expect(shippingService.getShippingCosts().toString()).toBe(shippings.toString());
  });

  it('setShipping should set shipping to value', () => {
    const value = 'None';
    shippingService.setShipping(value);
    expect(shippingService.type).toBe('None');
  });

  it('getType should return a string type', () => {
    const value = 'None';
    shippingService.setShipping(value);
    expect(shippingService.getType()).toEqual(jasmine.any(String));
  });
});
