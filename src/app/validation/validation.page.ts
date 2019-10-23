import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})
export class ValidationPage implements OnInit {

  nom: String = "";
  numCredit: String = "";
  dateArr: Date;

  slideOptsThree = {
    initialSlide: 1,
    slidesPerView: 2,
    centeredSlides: true,
    width: 250
  };

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    console.log("Hello");
  }

}
