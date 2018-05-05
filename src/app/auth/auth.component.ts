import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private afAuth : AuthService) { }

  reg(e : string, p : string){
    this.afAuth.register(e,p);
  }

  login(e : string, p : string ) {
    this.afAuth.login(e,p);
  }
  ngOnInit() {
  }

}
