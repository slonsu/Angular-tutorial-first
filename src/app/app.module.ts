import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';
import { WishlistComponent } from './wishlist/wishlist.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CurrencyComponent } from './currency/currency.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { ErrorComponent } from './error/error.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AdminComponent } from './admin/admin.component';
import { GuardComponent } from './guard/guard.component';
import { AdminGuard } from './admin.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UserGuard } from './user.guard';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    WishlistComponent,
    CurrencyComponent,
    DashboardComponent,
    NewsComponent,
    ArticleComponent,
    ErrorComponent,
    BreadcrumbsComponent,
    AdminComponent,
    GuardComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    EmployeesComponent,
    EmployeeRegisterComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', data: {name: 'Home'}, component: ProductListComponent},
      {path: 'products/:productId', data: {name: 'Product'}, component: ProductDetailsComponent},
      {path: 'cart', data: {name: 'Cart'}, component: CartComponent},
      {path: 'shipping', data: {name: 'Shipping'}, component: ShippingComponent},
      {path: 'wishlist', data: {name: 'Wishlist'}, component: WishlistComponent},
      {path: 'currency', data: {name: 'Currency'}, component: CurrencyComponent},
      {path: 'dashboard', data: {name: 'Dashboard'}, component: DashboardComponent},
      {path: 'dashboard/news', data: {name: 'News'}, component: NewsComponent},
      {path: 'dashboard/news/:articleId', data: {name: 'Article'}, component: ArticleComponent},
      {path: 'error', data: {name: 'Error'}, component: ErrorComponent},
      {path: 'guard', data: {name: 'Guard'}, component: GuardComponent},
      {path: 'admin', data: {name: 'Admin'}, component: AdminComponent, canActivate: [AdminGuard]},
      {path: 'login', data: {name: 'Login'}, component: LoginComponent},
      {path: 'register', data: {name: 'Register'}, component: RegisterComponent},
      {path: 'user', data: {name: 'Users'}, component: UserComponent, canActivate: [UserGuard]},
      {path: 'employees', data: {name: 'employees'}, component: EmployeesComponent},
      {path: 'employees/register', data: {name: 'register'}, component: EmployeeRegisterComponent},
      {path: 'employees/:id', data: {name: 'id'}, component: EmployeeComponent},
      {path: '**', redirectTo: 'error'}
    ]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
