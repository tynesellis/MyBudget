import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FireCrudService } from '../fire-crud.service';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-pay-period-detail',
  templateUrl: './pay-period-detail.component.html',
  styleUrls: ['./pay-period-detail.component.css']
})
export class PayPeriodDetailComponent implements OnInit {

  categories: Observable<any>;
  id: string;

  constructor(  
    private route: ActivatedRoute,
    private firebase: FireCrudService,
    private location: Location,
    private db : AngularFirestore
  ) {
    this.categories = db.collection('PayPeriods').doc(this.route.snapshot.paramMap.get('id')
    ).collection('PurchaseCategories').valueChanges();
   }

  ngOnInit() {
  }

}
