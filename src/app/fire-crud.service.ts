import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';
import { Purchase } from './Purchase';
import { Period } from './pay-period';


@Injectable()
export class FireCrudService {

  constructor(private db : AngularFirestore) { 
    }

    addPeriod(obj : any, dbCollection : string) {
      const id = this.db.createId();
      obj.id = id;
      obj.date = new Date();
      this.db.collection(dbCollection).doc(id).set(obj);
    }

    addPurchase(obj : Purchase, period : string) {
      const id = this.db.createId();
      obj.id = id;
      obj.date = new Date();
      this.db.collection('PayPeriods').doc(period).set(obj);
    }

    delete(col : string, id : string) {
      this.db.collection(col).doc(id).delete();
    }

}
