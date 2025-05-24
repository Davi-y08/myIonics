import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
@Component({
  selector: 'app-animais-favoritos',
  templateUrl: './animais-favoritos.page.html',
  styleUrls: ['./animais-favoritos.page.scss'],
  standalone: false
})
export class AnimaisFavoritosPage implements OnInit {

  constructor(
    
  ) { }
  favoriteAnimals: any[] = [];

  ngOnInit() {
  const savedAnimais = localStorage.getItem('animals');
  if (savedAnimais) {
    const allAnimals = JSON.parse(savedAnimais);
    this.favoriteAnimals = allAnimals.filter((a: any) => a.curtido === true);
  }
}


}
