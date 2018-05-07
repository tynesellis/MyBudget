import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayPeriodDetailComponent } from './pay-period-detail/pay-period-detail.component';
import { PayPeriodComponent } from './pay-period/pay-period.component';

const routes: Routes = [
  { path: 'pay-periods/:id', component: PayPeriodComponent },
  { path: 'details/:id', component: PayPeriodDetailComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
