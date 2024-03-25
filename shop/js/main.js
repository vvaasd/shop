const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

// Click on buttons (add hint)
for (const btn of infoBtns) {
   btn.addEventListener('click', function (e) {
      e.stopPropagation();

      // hide all hints (if needed)
      // for (const hint of infoHints) {
      //    hint.classList.add('none');
      // }

      // show current hint
      this.parentNode.querySelector('.info-hint').classList.toggle('none');
   });
}

// Click on document (remove hint)
document.addEventListener('click', function () {
   for (const hint of infoHints) {
      hint.classList.add('none');
   }
});

// Запрещаем всплытия клика при клике на hit
for (const hint of infoHints) {
   hint.addEventListener('click', (e) => e.stopPropagation());
}

// swiper slider
const swiper = new Swiper('.swiper', {
   navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
   },

   slidesPerView: 1,
   spaceBetween: 42,

   loop: true,
   freeMode: true,

   breakpoints: {
      600: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      920: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
      1440: {
         slidesPerView: 4,
         spaceBetween: 42,
      },
   },
});

// tabs
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

const mobileTabsBtn = document.querySelector('#open-tab-controls-btn');
const mobileDivOfTabsToDrop = document.querySelector('#tabs-to-drop');

for (const btn of tabsBtns) {
   btn.addEventListener('click', function () {
      // toggle active class for every button
      for (const btn of tabsBtns) {
         if (btn.dataset.tab !== this.dataset.tab) {
            btn.classList.remove('tab-controls__btn--active');
         } else {
            btn.classList.add('tab-controls__btn--active');
         }
      }

      // hide unneeded products, show needed products
      for (const product of tabsProducts) {
         if (this.dataset.tab === 'All') {
            product.classList.remove('none');
         } else {
            if (product.dataset.tabValue !== this.dataset.tab) {
               product.classList.add('none');
            } else {
               product.classList.remove('none');
            }
         }
      }
      mobileTabsBtn.innerHTML = `Category: <b>${btn.dataset.tab}</b>`;
      mobileDivOfTabsToDrop.classList.add('h0');
      swiper.update();
   });
}
// tabs mobile
// const mobileTabsBtn = document.querySelector('#open-tab-controls-btn');
// const mobileDivOfTabsToDrop = document.querySelector('#tabs-to-drop');
mobileTabsBtn.addEventListener('click', () => {
   mobileDivOfTabsToDrop.classList.toggle('h0');
});

// mobile nav
const mobileNav = document.querySelector('#mobile-nav');
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');

mobileNavOpenBtn.onclick = function () {
   mobileNav.classList.add('mobile-nav-wrapper--open');
};
mobileNavCloseBtn.onclick = function () {
   mobileNav.classList.remove('mobile-nav-wrapper--open');
};
