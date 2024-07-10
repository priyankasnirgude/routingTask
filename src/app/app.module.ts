import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AuthComponent } from './shared/components/auth/auth.component';
import { HomeComponent } from './shared/components/home/home.component';
import { UsersComponent } from './shared/components/users/users.component';
//import { ProductsComponent } from './shared/components/products/products.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { EdituserComponent } from './shared/components/users/edituser/edituser.component';
import { SingleuserComponent } from './shared/components/users/singleuser/singleuser.component';
import { ProductComponent } from './shared/components/product/product.component';
import { EditproductComponent } from './shared/components/product/editproduct/editproduct.component';
import { ProdDialogComponent } from './shared/components/product/prod-dialog/prod-dialog.component';
import { SingleproductComponent } from './shared/components/product/singleproduct/singleproduct.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    //ProductsComponent,
    NavbarComponent,
    AuthComponent,
    PageNotFoundComponent,
    EdituserComponent,
    SingleuserComponent,
    ProductComponent,
    EditproductComponent,
    ProdDialogComponent,
    SingleproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
