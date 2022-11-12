export function validateData(selector) {
  selector.addEventListener('input', () => {
    return condition(selector);
  })
  return condition(selector);
}

function condition(selector) {
  if (selector.value === '') {
    selector.classList.add('error');
    return false;
  } else {
    selector.classList.remove('error');
    return true;
  }
}