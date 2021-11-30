import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-authentication-button',
  templateUrl: './authentication-button.component.html',
  styles: [],
})
export class AuthenticationButtonComponent {
  isAuthenticated$ = this.auth.isAuthenticated$;

  constructor(private auth: AuthService) {}
}
