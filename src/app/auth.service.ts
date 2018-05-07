import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FireCrudService } from './fire-crud.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth, private crud : FireCrudService) {
    this.user = afAuth.authState;
   }

  user: Observable<firebase.User>;
  
  register (e : string, p : string){
    return this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(e,p).then(r =>{
      this.crud.addUserSection(r.user.uid);
      return r.user.uid;
    })
  }
  
  login(e : string, p : string) {
    return this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(e, p).then(r => {
      return r.user.uid;
    })
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
