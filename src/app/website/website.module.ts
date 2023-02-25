import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';


import { RegistComponent } from './components/regist/regist.component';
import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';

import { MaterialModule } from '../#models/material.module';


@NgModule({
  declarations: [
    RegistComponent,
    HeaderComponent,
    HomeComponent,
    CategoryComponent,
    MyCartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    AllProductsComponent,
    ContactUsComponent,
    LayoutComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    FormsModule,
    SharedModule,
    MaterialModule
  ]
})
export class WebsiteModule { }
