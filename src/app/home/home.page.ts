import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { AnimaisFavoritosPage } from '../animais-favoritos/animais-favoritos.page';
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
      descriptionView: 'Vive em tocas e é curiosa',
      description: 'A fuinha é um pequeno mamífero carnívoro da família dos mustelídeos, mesma família das doninhas, lontras e martas. Com corpo alongado, patas curtas e pelagem marrom com uma mancha branca no pescoço, ela é ágil, curiosa e excelente caçadora.',
      curtido: false
    },
    {
      name: 'Rato',
      image: 'assets/rato.jpeg',
      descriptionView: 'Habita esgotos e telhados',
      description: 'O rato é um pequeno mamífero roedor pertencente à família Muridae, geralmente do gênero Rattus. É conhecido por sua inteligência, adaptabilidade e capacidade de sobreviver em diversos ambientes, incluindo áreas urbanas.',
      curtido: false
    },
    {
      name: 'Foca',
      image: 'assets/foca.png',
      descriptionView: 'Nada em águas geladas',
      description: 'As focas são mamíferos marinhos pertencentes à família Phocidae (focas verdadeiras), que vivem principalmente em ambientes costeiros e polares, tanto no hemisfério norte quanto no sul. São conhecidas por seu corpo hidrodinâmico adaptado para a vida aquática, com nadadeiras em vez de patas, o que lhes permite nadar com agilidade.',
      curtido: false
    },
    {
      name: 'Porquinho',
      image: 'assets/porco.jpg',
      descriptionView: 'Adora se sujar de lama',
      description: 'Os porcos, também conhecidos como suínos, são mamíferos pertencentes à família Suidae. Domesticados há milhares de anos, eles desempenham um papel importante na agricultura e na alimentação humana em diversas culturas ao redor do mundo.',
      curtido: false
    }
  ];

  constructor(
    private modalCtrl: ModalController,
    private navPage: NavController
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
curtirAnimal(animal: any) {
  animal.curtido = true;
  localStorage.setItem('animals', JSON.stringify(this.animals));
}
}
