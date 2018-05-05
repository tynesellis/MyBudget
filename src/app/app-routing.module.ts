import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayPeriodDetailComponent } from './pay-period-detail/pay-period-detail.component';

const routes: Routes = [
  { path: 'details/:id', component: PayPeriodDetailComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
