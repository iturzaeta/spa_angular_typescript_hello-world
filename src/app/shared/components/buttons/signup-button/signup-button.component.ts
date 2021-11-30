import { Component } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-signup-button',
  templateUrl: './signup-button.component.html',
})
export class SignupButtonComponent {
  constructor(private auth: AuthService) {}

  loginWithRedirect(): void {
    /**
     * Using the Signup feature requires you to enable
     * the Auth0 New Universal Login Experience in your tenant.
     * Learn more: https://auth0.com/docs/universal-login/new-experience
     */
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }
}
