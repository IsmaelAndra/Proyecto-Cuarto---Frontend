import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProductsComponent } from './modules/products/products/products.component';
import { DetailComponent } from './modules/products/detail/detail.component';
import { EditProductComponent } from './modules/products/edit-product/edit-product.component';
import { NewProductComponent } from './modules/products/new-product/new-product.component';
import { UsersComponent } from './modules/user/users/users.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { HistoriesComponent } from './modules/histories/histories/histories.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'editar/:id', component:EditProductComponent},
  {path: 'nuevo', component:NewProductComponent},
  {path: 'detail-product/:id', component:DetailComponent},
  {path: 'users', component: UsersComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'histories', component:HistoriesComponent},
  // {path: 'category', component:CategoriesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
