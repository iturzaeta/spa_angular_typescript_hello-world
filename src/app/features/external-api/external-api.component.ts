import { Component } from '@angular/core';
import { AccessControlLevel } from './access-control-level.enum';
import { ExternalApiService } from './external-api.service';

@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
  styles: [],
})
export class ExternalApiComponent {
  selectedAccessControlLevel$ =
    this.externalApiService.selectedAccessControlLevel$;
  apiEndpoint$ = this.externalApiService.apiEndpoint$;
  apiResponse$ = this.externalApiService.apiResponse$;

  PUBLIC = AccessControlLevel.PUBLIC;
  PROTECTED = AccessControlLevel.PROTECTED;
  RBAC = AccessControlLevel.RBAC;
  CORS = AccessControlLevel.CORS;

  constructor(public externalApiService: ExternalApiService) {}

  getPublicResource(): void {
    this.externalApiService.getPublicResource();
  }

  getProtectedResource(): void {
    this.externalApiService.getProtectedResource();
  }

  getRbacResource(): void {
    this.externalApiService.getRbacResource();
  }

  checkCorsAllowedMethod(): void {
    this.externalApiService.checkCorsAllowedMethod();
  }
}
