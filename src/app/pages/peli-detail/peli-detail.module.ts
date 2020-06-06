import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliDetailPageRoutingModule } from './peli-detail-routing.module';

import { PeliDetailPage } from './peli-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliDetailPageRoutingModule
  ],
  declarations: [PeliDetailPage]
})
export class PeliDetailPageModule {}
