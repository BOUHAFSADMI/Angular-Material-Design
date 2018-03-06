import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CouponsComponent } from './pages/coupons/coupons.component';
import { HomeComponent } from './pages/home/home.component';
import {HelpComponent} from './pages/help/help.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'coupons', component: CouponsComponent },
  { path: 'help', component: HelpComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports:[RouterModule],
})
export class AppRoutingModule { }
