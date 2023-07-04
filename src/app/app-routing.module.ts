import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/auth/auth-routing.module').then(m => m.AuthRoutingModule) },
      { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule) },
      { path: 'products', loadChildren: () => import('./modules/products/products-routing.module').then(m => m.ProductsRoutingModule) },
      { path: 'histories', loadChildren: () => import('./modules/histories/histories-routing.module').then(m => m.HistoriesRoutingModule) },
      { path: 'store', loadChildren: () => import('./modules/store/store-routing.module').then(m => m.StoreRoutingModule) },
      { path: 'users', loadChildren: () => import('./modules/user/user-routing.module').then(m => m.UserRoutingModule) },
      { path: '**', loadChildren: () => import('./modules/page-not-found/page-not-found-routing.module').then(m => m.PageNotFoundRoutingModule)}
    ]
  },
  // {path: 'category', component:CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
