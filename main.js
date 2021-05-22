//Mostrar scroll top
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')

  if (this.scrollY >= 560) {
      scrollTop.classList.add('show-scroll')
  } else {
      scrollTop.classList.remove('show-scroll')
  }
}

window.addEventListener('scroll', scrollTop)

// MIXITUP Filtro product
const mixer = mixitup('.product__container', {
  selectors: {
      target: '.product__content'
  },
  animation: {
      duration: 500
  }
});

// LINK active-product
const linkProduct = document.querySelectorAll('.product__item')

function activeProduct() {
  if (linkProduct) {
      linkProduct.forEach(l => l.classList.remove('active-product'))
      this.classList.add('active-product')
  }
}

linkProduct.forEach(l => l.addEventListener('click', activeProduct))