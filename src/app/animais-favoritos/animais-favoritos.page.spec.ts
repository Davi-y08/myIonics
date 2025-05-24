import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimaisFavoritosPage } from './animais-favoritos.page';

describe('AnimaisFavoritosPage', () => {
  let component: AnimaisFavoritosPage;
  let fixture: ComponentFixture<AnimaisFavoritosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaisFavoritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
