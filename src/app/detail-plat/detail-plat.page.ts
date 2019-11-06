import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from '../Service/plat.service';
import { Plat } from '../Modele/plat';

@Component({
  selector: 'app-detail-plat',
  templateUrl: './detail-plat.page.html',
  styleUrls: ['./detail-plat.page.scss'],
})
export class DetailPlatPage implements OnInit {

  data: Array<Plat>;
  produit = [];
  idParams = null;

  constructor(private route: ActivatedRoute, private router: Router, private platService:PlatService) {
    
  }

  ngOnInit() {
    for(let i = 0; i < this.platService.getProducts().length; i++){
      for(let j = 0; j < this.platService.getProducts()[i].products.length; j++){
        this.produit.push(this.platService.getProducts()[i].products[j]);
      }
    }
    this.idParams = this.route.snapshot.paramMap.get('id');
    console.log(this.idParams)
    for(let i = 0; i < this.produit.length; i++){
      if(this.produit[i].id == this.idParams){
        this.data = this.produit[i];
      }
    }
  }

  favorite(data){
    this.platService.addFavorite(data)
    console.log(this.platService.getFavorite())
  }

  addCard(data){
    this.platService.addCommande(data);
  }

}
