// CORE
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { GenetecNavComponent } from './core/genetec-nav/genetec-nav.component';

// Angular Material modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { GenetecConfirmDialogComponent } from './components/genetec-list/genetec-confirm-dialog/genetec-confirm-dialog.component';

// SERVICE WORKER
import { ServiceWorkerModule } from '@angular/service-worker';

// NGRX
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromBooks from './store/reducers';

// ENVIRONMENT
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

// Modules
import { ComponentsModule } from './components/components.module';

// export const metaReducers: MetaReducer<any>[] = !environment.production
//   ? [storeFreeze]
//   : [];

// ngrx
const ngrxModules = [
  StoreModule.forRoot(reducers, {
    metaReducers,
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
      strictActionSerializability: true,
      strictStateSerializability: true,
    },
  }),
  EffectsModule.forRoot(),
  StoreRouterConnectingModule.forRoot({
    stateKey: 'router',
    routerState: RouterState.Minimal,
  }),

  // !environment.production ? StoreDevtoolsModule.instrument() : [],
  StoreModule.forRoot({}, { metaReducers }),
  EffectsModule.forRoot([]),
  environment.production ? StoreDevtoolsModule.instrument() : [],
];
@NgModule({
  declarations: [
    AppComponent,
    GenetecNavComponent,
    GenetecConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first)
      registrationStrategy: 'registerWhenStable:30000',
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    ...ngrxModules,
    ComponentsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
