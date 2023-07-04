import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './modules/products/products.module';
import { HistoriesModule } from './modules/histories/histories.module';
import { StoreModule } from './modules/store/store.module';
import { UserModule } from './modules/user/user.module';
import localePy from '@angular/common/locales/es-EC';
import { registerLocaleData } from '@angular/common';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { PageNotFoundModule } from './modules/page-not-found/page-not-found.module';
registerLocaleData(localePy, 'es')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ProductsModule,
    HistoriesModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule,
    UserModule,
    AuthModule,
    DashboardModule,
    PageNotFoundModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
