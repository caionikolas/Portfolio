/* ====== CHANGE BACKGROUND HEADER ====== */

/* ====== SERVICES MODAL ====== */
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})
/* ====== MIXITUP FILTER PORTFOLIO ====== */

/* link active work */

/* ====== SWIPER TESTIMONIALS ====== */

/* ====== SCROLL SECTIONS ACTIVE LINK ====== */

/* ====== LIGHT DARK THEME ====== */

/* ====== SKIN COLORS ====== */

