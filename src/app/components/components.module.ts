import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenetecListComponent } from './genetec-list/genetec-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromBooks from '../store/reducers';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { GenetecLogsComponent } from './genetec-logs/genetec-logs.component';
import { GenetecDialogComponent } from './genetec-list/genetec-dialog/genetec-dialog.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../app.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';

// DATETIME
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    GenetecListComponent,
    GenetecLogsComponent,
    GenetecDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDatepickerModule,

    StoreModule.forFeature('books', fromBooks.reducers),
    EffectsModule.forFeature([AppEffects]),
  ],
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders<ComponentsModule> {
    return {
      ngModule: ComponentsModule,
    };
  }
}
