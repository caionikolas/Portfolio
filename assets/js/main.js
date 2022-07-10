/* ====== CHANGE BACKGROUND HEADER ====== */

/* ====== SERVICES MODAL ====== */
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose, i) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})

/* ====== MIXITUP FILTER PORTFOLIO ====== */
let mixPortfolio = mixitup('.work__container', {
  selectors: {
      target: '.work__card'
  },
  animation: {
      duration: 300
  }
});

/* link active work */
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
  linkWork.forEach(l=> l.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))

/* ====== SWIPER TESTIMONIALS ====== */

/* ====== SCROLL SECTIONS ACTIVE LINK ====== */

/* ====== LIGHT DARK THEME ====== */

/* ====== SKIN COLORS ====== */

