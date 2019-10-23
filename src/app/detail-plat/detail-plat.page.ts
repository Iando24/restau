import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-detail-plat',
  templateUrl: './detail-plat.page.html',
  styleUrls: ['./detail-plat.page.scss'],
})
export class DetailPlatPage implements OnInit {

  constructor(public event: Events) {
    
  }

  ngOnInit() {
    this.event.subscribe('my-message', (data) => {
      console.log(data)
    });
  }

}
