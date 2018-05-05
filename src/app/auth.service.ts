import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  getAuthState() {
    return this.afAuth.authState
  }

  register(e : string, p : string){
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(e, p)
  }
  
  login(e : string, p : string) {
    this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(e, p);
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
