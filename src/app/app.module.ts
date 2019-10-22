import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { DxBulletModule, DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { DataGridService } from './data-grid/data-grid.service';
import { AuthGuard } from './guards/auth.guard';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthDataService } from './services/auth/auth-data-service';
import { AuthService } from './services/auth/auth.service';
import { JwtInterceptorService } from './services/jwt-interceptor/jwt-interceptor';
import { ServicesModule } from './services/services.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    DataGridComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ServicesModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
    NavComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    AuthService,
    AuthDataService,
    AuthGuard,
    DataGridService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic()
  .bootstrapModule(AppModule);
