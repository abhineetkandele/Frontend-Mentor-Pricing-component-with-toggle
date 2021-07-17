const anuualPrices = ['&dollar;199.99', '&dollar;249.99', '&dollar;399.99'];
const monthlyPrices = ['&dollar;19.99', '&dollar;24.99', '&dollar;39.99'];

document.getElementsByTagName('input')[0].addEventListener('click', (e) => {
  if (e.target.checked) {
    [...document.getElementsByClassName('price')].forEach((element, index) => {
      element.innerHTML = monthlyPrices[index];
    });
  } else {
    [...document.getElementsByClassName('price')].forEach((element, index) => {
      element.innerHTML = anuualPrices[index];
    });
  }
})