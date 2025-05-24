import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimaisFavoritosPageRoutingModule } from './animais-favoritos-routing.module';

import { AnimaisFavoritosPage } from './animais-favoritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimaisFavoritosPageRoutingModule
  ],
  declarations: [AnimaisFavoritosPage]
})
export class AnimaisFavoritosPageModule {}
