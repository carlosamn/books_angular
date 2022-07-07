import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenetecListComponent } from './genetec-list/genetec-list.component';
import { GenetecLogsComponent } from './genetec-logs/genetec-logs.component';
import { ListResolver } from './resolver';

const routes: Routes = [
  {
    path: '',
    component: GenetecListComponent,
    resolve: {
      initialData: ListResolver,
    },
  },
  {
    path: 'logs',
    component: GenetecLogsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
