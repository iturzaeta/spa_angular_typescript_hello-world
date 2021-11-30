import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    `
      :host {
        width: 100%;
      }
    `,
  ],
})
export class FooterComponent {
  resourceList = [
    {
      path: 'https://auth0.com/why-auth0/',
      label: 'Why Auth0',
    },
    {
      path: 'https://auth0.com/docs/get-started',
      label: 'How It Works',
    },
    {
      path: 'https://auth0.com/blog/developers/',
      label: 'Developer Blog',
    },
    {
      path: 'https://auth0.com/contact-us',
      label: 'Contact an Expert',
    },
  ];

  createAuthAccount(): void {
    window.open('https://auth0.com/signup', '_blank', 'noopener noreferrer');
  }
}
