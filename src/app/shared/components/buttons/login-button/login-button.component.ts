import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styles: [],
})
export class LoginButtonComponent {
  constructor(
    private auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  loginWithRedirect(): void {
    console.log(this.doc.location);

    this.auth.loginWithRedirect();
  }
}
