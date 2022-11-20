import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimesTablePage } from './times-table.page';

const routes: Routes = [
  {
    path: '',
    component: TimesTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimesTablePageRoutingModule {}
