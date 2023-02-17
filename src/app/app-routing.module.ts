import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
    //RENDERIZA LA PAGE DE WEBSITE
    {
      path: '',
      loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
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
