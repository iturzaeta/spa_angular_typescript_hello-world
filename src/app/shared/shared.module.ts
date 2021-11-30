import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Auth0FeaturesComponent } from './components/auth0-features/auth0-features.component';
import { AuthenticationButtonComponent } from './components/buttons/authentication-button/authentication-button.component';
import { LoginButtonComponent } from './components/buttons/login-button/login-button.component';
import { LogoutButtonComponent } from './components/buttons/logout-button/logout-button.component';
import { SignupButtonComponent } from './components/buttons/signup-button/signup-button.component';
import { CodeSnippetComponent } from './components/code-snippet/code-snippet.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    HeroBannerComponent,
    Auth0FeaturesComponent,
    LoaderComponent,
    CodeSnippetComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent,
    AuthenticationButtonComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavBarComponent,
    FooterComponent,
    HeroBannerComponent,
    Auth0FeaturesComponent,
    CodeSnippetComponent,
    LoaderComponent,
  ],
})
export class SharedModule {}
