import {
  validateData
} from './validateData';

import { renderFeature } from './renderFeature';

export function formFeature() {
  const formMenFeature = document.querySelector('[data-form="men-feature"]');
  const formWomenFeature = document.querySelector('[data-form="women-feature"]');

  formMenFeature.addEventListener('submit', function (e) {
    let value = this.feature.value;
    let selector = document.querySelector('#bike-men');
    e.preventDefault();
    if (validateData(this.feature)) {      
      renderFeature(selector, value);
    }
  })

  formWomenFeature.addEventListener('submit', function (e) {
    let value = this.feature.value;
    let selector = document.querySelector('#bike-women');
    e.preventDefault();
    if (validateData(this.feature)) {
     renderFeature(selector, value);
    }
  })
}