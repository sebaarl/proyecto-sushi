//Mostar menú
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  nav = document.getElementById(navId)
  
  if (toggle && nav) {
      toggle.addEventListener('click', () => {
          nav.classList.toggle('show-menu')
      })
  }
}

showMenu('nav-toggle', 'nav-menu')

//Remover menú
const navLink = document.querySelectorAll('.nav__links')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

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

// MIXITUP FILTER PORTAFOLIO
const mixer = mixitup('.product__container', {
  selectors: {
      target: '.product__content'
  },
  animation: {
      duration: 500
  }
});

// LINK ACTIVATE PORTAFOLIO
const linkProduct = document.querySelectorAll('.product__item')

function activeProduct() {
  if (linkProduct) {
      linkProduct.forEach(l => l.classList.remove('active-product'))
      this.classList.add('active-product')
  }
}

linkProduct.forEach(l => l.addEventListener('click', activeProduct))