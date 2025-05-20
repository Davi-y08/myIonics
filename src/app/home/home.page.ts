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
      descriptionView: 'Topeira',
      description: 'A fuinha é um pequeno mamífero carnívoro da família dos mustelídeos, mesma família das doninhas, lontras e martas. Com corpo alongado, patas curtas e pelagem marrom com uma mancha branca no pescoço, ela é ágil, curiosa e excelente caçadora.'
    },
    {
      name: 'Rato',
      image: 'assets/rato.jpeg',
      descriptionView: 'Ratoncios',
      description: 'O rato é um pequeno mamífero roedor pertencente à família Muridae, geralmente do gênero Rattus. É conhecido por sua inteligência, adaptabilidade e capacidade de sobreviver em diversos ambientes, incluindo áreas urbanas.'
    },
    {
      name: 'Foca',
      image: 'assets/foca.png',
      descriptionView: 'Foquinhas',
      description: 'As focas são mamíferos marinhos pertencentes à família Phocidae (focas verdadeiras), que vivem principalmente em ambientes costeiros e polares, tanto no hemisfério norte quanto no sul. São conhecidas por seu corpo hidrodinâmico adaptado para a vida aquática, com nadadeiras em vez de patas, o que lhes permite nadar com agilidade.'
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
