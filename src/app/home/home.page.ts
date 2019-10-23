import { Component, OnInit } from '@angular/core';

import { Plat } from '../Modele/plat';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';

import { PlatService } from '../Service/plat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  rout: any = "";
  panier: Array<Plat> = [];
  fav: Array<String> = [];
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
    width: 250
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

  plats = [
    {
      text: "Salami",
      img: "../assets/images/HomeDesktopSlide0.jpg"
    },
    {
      text: "Salami",
      img: "../assets/images/HomeDesktopSlide1.jpg"
    },
    {
      text: "Salami",
      img: "../assets/images/HomeDesktopSlide2.jpg"
    },
    {
      text: "Salami",
      img: "../assets/images/HomeDesktophtml_row3.jpg"
    }
  ]

  constructor(public router: Router, public event: Events, private platService: PlatService) {}

  ngOnInit(){
  }

  addPanier(panier) {
    this.panier.push(panier);
    console.log(this.panier);
  }

  apropos(fav) {
    this.event.publish('my-message', fav);
    return this.router.navigateByUrl('detail-plat', fav);
  }

}
