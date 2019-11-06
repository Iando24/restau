import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { PlatService } from '../Service/plat.service';
import { Plat } from '../Modele/plat';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  produit = [];
  categories = [];
  image: Array<String> = [];
  favorite: Array<Plat> = [];
  plat = [];

 	slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    speed: 400
  };

  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    centeredSlides: true
  };

  slideOptsThree = {
    initialSlide: 1,
    slidesPerView: 2,
    centeredSlides: true,
    width: 200
  };

  slideImage = [
    {
      img: "../assets/images/HomeDesktopSlide0.jpg"
    },
    {
      img: "../assets/images/HomeDesktopSlide1.jpg"
    },
    {
      img: "../assets/images/HomeDesktopSlide2.jpg"
    }
  ]

  constructor(public router: Router, private platService: PlatService) {
    console.log(this.platService.getFavorite());
  }

  ngOnInit(){
    for(let i = 0; i < this.platService.getProducts().length; i++){
      this.categories.push(this.platService.getProducts()[i].category);
      for(let j = 0; j < this.platService.getProducts()[i].products.length; j++){
        this.produit.push(this.platService.getProducts()[i].products[j]);
      }
    }
    for(let i = 0; i < this.platService.getFavorite().length; i++){
      this.favorite.push(this.platService.getFavorite()[i]);
    }
    console.log(this.produit);
  }

  trier(categorie){
    for(let i = 0; i < this.platService.getProducts().length; i++){
      if(this.platService.getProducts()[i].category === categorie){
        this.produit = [];
        for(let j = 0; j < this.platService.getProducts()[i].products.length; j++){
          this.produit.push(this.platService.getProducts()[i].products[j]);
        }
      }
    }
  }

  all(){
    this.produit = [];
    this.categories = [];
    for(let i = 0; i < this.platService.getProducts().length; i++){
      this.categories.push(this.platService.getProducts()[i].category);
      for(let j = 0; j < this.platService.getProducts()[i].products.length; j++){
        this.produit.push(this.platService.getProducts()[i].products[j]);
      }
    }
  }

  apropos(data) {
    this.router.navigateByUrl('detail-plat/'+data);
  }

}
