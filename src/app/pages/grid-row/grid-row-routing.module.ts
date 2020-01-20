import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridRowPage } from './grid-row.page';

const routes: Routes = [
  {
    path: '',
    component: GridRowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridRowPageRoutingModule {}
