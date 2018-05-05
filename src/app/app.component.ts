import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FireCrudService } from './fire-crud.service';
import * as firebase from 'firebase/app';
import { AuthService } from './auth.service';
import { User } from '@firebase/auth-types';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Budget';
  constructor(private afAuth : AuthService){
    this.user = afAuth.getAuthState();
    }
  user: Observable<firebase.User>;

  reg(e : string, p : string){
    this.afAuth.register(e,p);
  }

}
