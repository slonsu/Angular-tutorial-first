import { Injectable } from '@angular/core';
import { data } from './rates';
import { from } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class CurrencyService {

 result;
 Observer;

 constructor() {
   this.result = this.transformObjecttoArray(data.rates);

   this.Observer = from(this.result);
 }

 transformObjecttoArray(object) {
   const result = [];
   const keys = Object.keys(object);
   for (const key of keys) {
     const value = object[key];
     const item = {
       currency: key,
       value
     };

     result.push(item)
   }
   return result;
 }

 subscribe(next, complete) {
   let i = 0;

   for (const item of this.result) {
     setTimeout(() => {
       next(item);
     }, i * 500);

     i++;
   }

   setTimeout(() => {
     complete(this.result.length);
   }, i * 500);
 }
}