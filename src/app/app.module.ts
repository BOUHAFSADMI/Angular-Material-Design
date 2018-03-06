import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CouponsComponent } from './pages/coupons/coupons.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AppRoutingModule } from './app-routing.module';
import {MaterialModule} from './material.module';
import {CarrotService} from './services/carrot.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HelpComponent } from './pages/help/help.component';
import { CoupondialogComponent } from './components/coupondialog/coupondialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CouponsComponent,
    CheckoutComponent,
    HelpComponent,
    CoupondialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CarrotService],
  bootstrap: [AppComponent],
  entryComponents: [CoupondialogComponent],

})
export class AppModule { }
