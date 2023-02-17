import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './website/components/product/product.component';
import { RegistComponent } from './website/components/regist/regist.component';
import { HeaderComponent } from './website/components/header/header.component';
import { ProductsComponent } from './website/components/products/products.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HomeComponent } from './website/pages/home/home.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { CategoryComponent } from './website/pages/category/category.component';
import { MyCartComponent } from './website/pages/my-cart/my-cart.component';
import { LoginComponent } from './website/pages/login/login.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { RecoveryComponent } from './website/pages/recovery/recovery.component';
import { ProfileComponent } from './website/pages/profile/profile.component';
import { ImgComponent } from './website/components/img/img.component';
import { ProductDetailComponent } from './website/pages/product-detail/product-detail.component';
import { AllProductsComponent } from './website/pages/all-products/all-products.component';
import { ContactUsComponent } from './website/pages/contact-us/contact-us.component';
import { LayoutComponent } from './website/components/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    RegistComponent,
    HeaderComponent,
    ProductsComponent,
    HomeComponent,
    NotFoundComponent,
    CategoryComponent,
    MyCartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ImgComponent,
    ProductDetailComponent,
    AllProductsComponent,
    ContactUsComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [                         //TODOS LOS INTERCEPTORS SE TIENEN QUE AGREGAR MANUALMENTE A LOS PROVIDERS.
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
