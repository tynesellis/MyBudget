import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';
import { Purchase } from './Purchase';
import { Period } from './pay-period';


@Injectable()
export class FireCrudService {

  constructor(private db : AngularFirestore) { 
    }

    addUserSection(uid : string) {
      this.db.collection('Users').doc(uid).set({id: uid});
    }

    addPeriod(obj : any, user : string) {
      const id = this.db.createId();
      obj.id = id;
      obj.date = new Date();
      this.db.collection('Users').doc(user).collection('PayPeriods').doc(id).set(obj);
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
