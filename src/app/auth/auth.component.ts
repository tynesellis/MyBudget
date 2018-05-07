import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private afAuth : AuthService, private router : Router) { }

  reg(e : string, p : string){
    this.afAuth.register(e,p).then(u => this.nav(u));
  }

  login(e : string, p : string ) {
    this.afAuth.login(e,p).then(u => this.nav(u));
  }


  nav(user) {
    this.router.navigate([`pay-periods/${user}`])
  }

  ngOnInit() {
  }

}
