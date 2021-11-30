import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styles: [
    `
      :host {
        display: flex;

        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class LoaderComponent {
  loadingImg = 'https://cdn.auth0.com/blog/hello-auth0/loader.svg';
}
