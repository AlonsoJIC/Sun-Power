import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './website/components/layout/layout.component';
import { HomeComponent } from './website/pages/home/home.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { CategoryComponent } from './website/pages/category/category.component';
import { MyCartComponent } from './website/pages/my-cart/my-cart.component';
import { LoginComponent } from './website/pages/login/login.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { RecoveryComponent } from './website/pages/recovery/recovery.component';
import { ProfileComponent } from './website/pages/profile/profile.component';
import { ProductDetailComponent } from './website/pages/product-detail/product-detail.component';
import { AllProductsComponent } from './website/pages/all-products/all-products.component';
import { ContactUsComponent } from './website/pages/contact-us/contact-us.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: AllProductsComponent
      },
      {
        path: 'category/:id',
        component: CategoryComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: 'my-cart',
        component: MyCartComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'contactUs',
        component: ContactUsComponent
      },
      {
        path: 'recovery',
        component: RecoveryComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
    ]
  },

  //RENDERIZA LA PAGE DE ADMIN
  {
    path: 'admin',
    loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule)
  },

  //RENDERIZA LA PAGE NOTFOUND.... SIEMPRE VA DE ULTIMO PORQUE INTERFIERE!....
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
