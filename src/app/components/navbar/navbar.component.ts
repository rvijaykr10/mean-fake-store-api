import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // loggedIn: boolean;
  constructor(public _authService: AuthService) {}
  ngOnInit(): void {
    // this.loggedIn = this._authService.loggedIn();
    // this.logoutUser();
  }

  // logoutUser() {
  //   return this._authService.logoutUser();
  // }
}
