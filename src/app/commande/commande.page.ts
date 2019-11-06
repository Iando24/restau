import { Component, OnInit } from '@angular/core';
import { PlatService } from '../Service/plat.service';
import { Plat } from '../Modele/plat';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {

  commande: Array<Plat> = [];

  constructor(private platService: PlatService) { }

  ngOnInit() {
    for(let i = 0; i < this.platService.getCommande().length; i++) {
      this.commande.push(this.platService.getCommande()[i])
    }
  }

}
