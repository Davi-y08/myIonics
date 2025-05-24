import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimaisFavoritosPage } from './animais-favoritos.page';

const routes: Routes = [
  {
    path: '',
    component: AnimaisFavoritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisFavoritosPageRoutingModule {}
