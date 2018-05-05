import { Component, OnInit } from '@angular/core';
import {PayPeriodService} from '../pay-period.service'
import { Period } from '../pay-period';
import { FireCrudService } from '../fire-crud.service';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-pay-period',
  templateUrl: './pay-period.component.html',
  styleUrls: ['./pay-period.component.css']
})
export class PayPeriodComponent implements OnInit {


  periods: Observable<any>;

  constructor(private firebase : FireCrudService, private db : AngularFirestore) {
    this.periods = db.collection('PayPeriods').valueChanges();
  }

  delete(id : string) {
    this.firebase.delete('PayPeriods', id);
  }

  add(nm : string) {
    const per = {name: nm}
    this.firebase.addPeriod(per, 'PayPeriods')
  }
  
  ngOnInit() {
  }

}
