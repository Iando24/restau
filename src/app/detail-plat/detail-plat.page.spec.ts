import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlatPage } from './detail-plat.page';

describe('DetailPlatPage', () => {
  let component: DetailPlatPage;
  let fixture: ComponentFixture<DetailPlatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPlatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
