import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { AccessControlLevel } from './access-control-level.enum';

interface RequestConfig {
  url: string;
  method: string;
  headers: {
    [index: string]: string;
  };
}

@Injectable()
export class ExternalApiService {
  selectedAccessControlLevel$ = new BehaviorSubject<string | null>(null);
  apiEndpoint$ = new BehaviorSubject<string>('');
  apiResponse$ = new BehaviorSubject<any>(
    'Click a button to make an API request...'
  );

  apiServerUrl = env.api.serverUrl;

  message$ = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  makeRequest(config: RequestConfig): void {
    this.http.request(config.method, config.url, config.headers).subscribe({
      next: (data) => {
        if (data) {
          this.apiResponse$.next(data);
        }
      },
      error: (err) => {
        if (err.error && err.status) {
          this.apiResponse$.next(err.error);
          return;
        }

        this.apiResponse$.next(err.message);
      },
    });
  }

  getPublicResource(): void {
    this.selectedAccessControlLevel$.next(AccessControlLevel.PUBLIC);

    this.apiEndpoint$.next('GET /api/messages/public');

    const config: RequestConfig = {
      url: `${this.apiServerUrl}/api/messages/public`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    this.makeRequest(config);
  }

  getProtectedResource(): void {
    this.selectedAccessControlLevel$.next(AccessControlLevel.PROTECTED);

    this.apiEndpoint$.next('GET /api/messages/protected');

    const config: RequestConfig = {
      url: `${this.apiServerUrl}/api/messages/protected`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    this.makeRequest(config);
  }

  getRbacResource(): void {
    this.selectedAccessControlLevel$.next(AccessControlLevel.RBAC);

    this.apiEndpoint$.next('GET /api/messages/admin');

    const config: RequestConfig = {
      url: `${this.apiServerUrl}/api/messages/admin`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    this.makeRequest(config);
  }

  checkCorsAllowedMethod(): void {
    this.selectedAccessControlLevel$.next(AccessControlLevel.CORS);

    this.apiEndpoint$.next('DELETE /api/messages/public');

    const config: RequestConfig = {
      url: `${this.apiServerUrl}/api/messages/public`,
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    };

    this.makeRequest(config);
  }
}
