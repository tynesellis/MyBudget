import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
   }

  user: Observable<firebase.User>;
  
  register(e : string, p : string){
    this.afAuth.auth.createUserWithEmailAndPassword(e, p)
  }
  
  login(e : string, p : string) {
    this.afAuth.auth.signInWithEmailAndPassword(e, p);
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
