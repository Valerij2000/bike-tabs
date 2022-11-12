export function renderFeature(selector, value) {
  if (selector.getAttribute('id') === 'bike-men') {
    selector.innerHTML += renderTemplateMen(value);
  } else {
     selector.innerHTML += renderTemplateWomen(value);
  }
  
}

function renderTemplateMen(value) {
  return `
    <li class="bikes-feature__list-item bikes-feature__list-item--counter text">
      ${value}
    </li>
  `;
}

function renderTemplateWomen(value) {
  return `
    <li class="bikes-feature__list-item bikes-feature__list-item--bike text">
      ${value}
    </li>
  `;
}