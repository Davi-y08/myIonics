import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

   animals = [
    {
      name: 'Fuinha',
      image: 'assets/fuinha.jpeg',
      description: 'Topeira suprema'
    },
    {
      name: 'Rato',
      image: 'assets/rato.jpeg',
      description: 'O noob supremo'
    },
    {
      name: 'Foca',
      image: 'assets/foca.png',
      description: 'The noob'
    },
    {
      name: 'Porquinho',
      image: 'assets/porco.jpg',
      description: 'Porco gordo'
    }
  ];

  constructor(
    private modalCtrl: ModalController
  ) {}

  async openModal(animal: any) {
  const modal = await this.modalCtrl.create({
    component: ModalPage,
    cssClass: 'custom-modal-class',
    backdropDismiss: true,
    componentProps: { animal },
    showBackdrop: true,
    presentingElement: await this.modalCtrl.getTop()
  });

  return await modal.present();
}

  
}
