import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent //directive used in any component
  ],
  imports: [
    BrowserModule
  ],
  providers: [], //for services
  bootstrap: [AppComponent] //first component loaded
})
export class AppModule { }
