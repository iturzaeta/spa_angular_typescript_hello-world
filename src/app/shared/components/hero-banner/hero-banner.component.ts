import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styles: [],
})
export class HeroBannerComponent {
  logo = 'https://cdn.auth0.com/blog/hello-auth0/angular-logo.svg';

  openCodeSample(): void {
    window.open(
      'https://auth0.com/developers/hub/code-samples/spa/angular-typescript/',
      '_blank',
      'noopener noreferrer'
    );
  }
}
