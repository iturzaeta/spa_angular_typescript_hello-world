import { Component } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent {
  user$ = of({
    nickname: 'Alex',
    name: 'Alex Cero',
    picture: 'https://cdn.auth0.com/blog/hello-auth0/auth0-user.png',
    updated_at: '2021-05-04T21:33:09.415Z',
    email: 'alex@example.com',
    email_verified: false,
    sub: 'auth0|12345678901234567890',
  });

  title = 'User Profile Object';

  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null, 2)));
}
