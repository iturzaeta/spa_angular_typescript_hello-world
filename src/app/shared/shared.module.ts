import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { Auth0FeaturesComponent } from './components/auth0-features/auth0-features.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CodeSnippetComponent } from './components/code-snippet/code-snippet.component';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    HeroBannerComponent,
    Auth0FeaturesComponent,
    LoaderComponent,
    CodeSnippetComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavBarComponent,
    FooterComponent,
    HeroBannerComponent,
    Auth0FeaturesComponent,
    CodeSnippetComponent,
  ],
})
export class SharedModule {}
