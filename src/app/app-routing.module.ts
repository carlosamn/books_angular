import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { GenetecListComponent } from './components/genetec-list/genetec-list.component';
import { GenetecLogsComponent } from './components/genetec-logs/genetec-logs.component';
import { ListResolver } from './components/resolver';
import { Resolver } from './resolver';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
