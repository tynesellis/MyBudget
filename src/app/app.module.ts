import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFirestoreModule} from 'angularfire2/firestore';
 
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PayPeriodComponent } from './pay-period/pay-period.component';
import { PayPeriodService } from './pay-period.service';
import { FireCrudService } from './fire-crud.service';
import { AppRoutingModule } from './/app-routing.module';
import { PayPeriodDetailComponent } from './pay-period-detail/pay-period-detail.component';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    PayPeriodComponent,
    PayPeriodDetailComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [
    PayPeriodService,
    FireCrudService,
    AuthService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
