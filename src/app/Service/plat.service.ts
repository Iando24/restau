import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  private data = [
    {
      category : 'Pizza',
      expanded: true,
      products: [
        { id: 0, name: 'Salami', price: '8', img: '../assets/images/HomeDesktophtml_row3.jpg'},
        { id: 1, name: 'Classic', price: '5', img: '../assets/images/HomeDesktophtml_row3.jpg' },
        { id: 2, name: 'Tuna', price: '9', img: '../assets/images/HomeDesktophtml_row3.jpg' },
        { id: 3, name: 'Hawai', price: '7', img: '../assets/images/HomeDesktophtml_row3.jpg' }
      ],
    },
    {
      category: 'Pasta',
      products: [
        { id: 4, name: 'Mac & Cheese', price: '8', img: '../assets/images/HomeDesktophtml_row3.jpg' },
        { id: 5, name: 'Bolognese', price: '6', img: '../assets/images/HomeDesktophtml_row3.jpg' }
      ]
    },
    {
      category: 'Salad',
      products: [
        { id: 6, name: 'Ham & Egg', price: '8', img: '../assets/images/HomeDesktophtml_row3.jpg' },
        { id: 7, name: 'Basic', price: '5', img: '../assets/images/HomeDesktophtml_row3.jpg' },
        { id: 8, name: 'Ceaser', price: '9', img: '../assets/images/HomeDesktophtml_row3.jpg' }
      ]
    }
  ];

  private plat = [];

  constructor() { }

  getProducts(){
    return this.data;
  }

  getPlat(){
    return this.plat;
  }

  addProduit(produit ){
    this.plat.push(produit)
  }
}
