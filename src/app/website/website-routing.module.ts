import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
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

//GUARDS
import { AuthGuard } from './../guards/auth.guard';
import { ExitGuard } from './../guards/exit.guard';



const routes: Routes = [  {
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
      path: 'my-cart',
      component: MyCartComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      canDeactivate: [ExitGuard],
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
      canActivate: [AuthGuard],
      component: ProfileComponent
    },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
