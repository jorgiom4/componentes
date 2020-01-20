import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridRowPageRoutingModule } from './grid-row-routing.module';

import { GridRowPage } from './grid-row.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridRowPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GridRowPage]
})
export class GridRowPageModule {}
