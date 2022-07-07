import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentRoutingModule } from './component-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
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
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';

// Components
import { GenetecConfirmDialogComponent } from './genetec-list/genetec-confirm-dialog/genetec-confirm-dialog.component';
import { GenetecLogsComponent } from './genetec-logs/genetec-logs.component';
import { GenetecDialogComponent } from './genetec-list/genetec-dialog/genetec-dialog.component';
import { GenetecListComponent } from './genetec-list/genetec-list.component';

// RGRX
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../app.effects';
import { StoreModule } from '@ngrx/store';
import * as fromBooks from '../store/reducers/books.reducer';

// DATETIME
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    GenetecListComponent,
    GenetecLogsComponent,
    GenetecDialogComponent,
    GenetecConfirmDialogComponent,
  ],
  imports: [
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
    CommonModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ComponentRoutingModule,
    MatDialogModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    StoreModule.forFeature('books', fromBooks.getBooks),
    EffectsModule.forFeature([AppEffects]),
  ],
})
export class ComponentsModule {}
