import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenetecListComponent } from './genetec-list/genetec-list.component';
import { GenetecLogsComponent } from './genetec-logs/genetec-logs.component';

const routes: Routes = [
  {
    path: '',
    component: GenetecListComponent,
  },
  {
    path: 'logs',
    component: GenetecLogsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
