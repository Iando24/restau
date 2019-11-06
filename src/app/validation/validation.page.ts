import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})
export class ValidationPage implements OnInit {

  nom: String = "";
  numCredit: String = "";
  dateArr: Date;
  validationForm: FormGroup;

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

  constructor(private formBuilder:FormBuilder) { 
    this.validationForm = this.formBuilder.group({
      nom: ['']
    })
  }

  ngOnInit() {
  }

}
