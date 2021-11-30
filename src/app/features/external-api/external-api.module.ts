import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ExternalApiComponent } from './external-api.component';
import { ExternalApiService } from './external-api.service';

@NgModule({
  declarations: [ExternalApiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExternalApiComponent,
      },
    ]),
    SharedModule,
  ],
  providers: [ExternalApiService],
})
export class ExternalApiModule {}
