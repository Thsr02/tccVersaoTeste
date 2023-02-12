import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nivel1PageRoutingModule } from './nivel1-routing.module';

import { Nivel1Page } from './nivel1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nivel1PageRoutingModule
  ],
  declarations: [Nivel1Page]
})
export class Nivel1PageModule {}
