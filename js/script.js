// Swiper Hero

const swiper = new Swiper('.hero__swiper-container', {
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  speed: 1000,
  autoplay: {
    delay: 6000
  },
});

// Swiper Gallery

const swiperGallery = new Swiper('.gallery__swiper-container', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: false,
  spaceBetween: 25,
  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    375: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35,
    },
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 45,
    }
  },
  a11y: {
    prevSlideMessage: 'Предыдущая группа слайдов',
    nextSlideMessage: 'Следующая группа слайдов',
    slideLabelMessage: '{{index}} из {{slidesLength}}',
  },
});

// Плавный переход по якорным ссылкам

$(document).ready(function () {
  $('.header__link').on('click', function (event) {
    event.preventDefault();
    let href = $(this).attr('href');
    let offset = $(href).offset().top;
    $('body,html').animate({
      scrollTop: offset,
    }, 1000);
  });
  $('.header__burger-item-link').on('click', function (event) {
    event.preventDefault();
    let href = $(this).attr('href');
    let offset = $(href).offset().top;
    $('body,html').animate({
      scrollTop: offset,
    }, 1000);
  });
});

// Header Menu

document.querySelectorAll('.header__buttom-btn').forEach(dropdownsItem => {
  dropdownsItem.addEventListener('click', function () {
    let btn = this;
    let dropdown = btn.parentElement.querySelector('.header__menu-container');
    document.querySelectorAll('.header__buttom-btn').forEach(el => {
      if (el != btn) {
        el.classList.remove('header-menu__check_open');
      }
    });
    document.querySelectorAll('.header__menu-container').forEach(el => {
      if (el != dropdown) {
        el.classList.remove('header__buttom-menu_open');
      }
    })
    btn.classList.toggle('header-menu__check_open')
    dropdown.classList.toggle('header__buttom-menu_open')
  })
})

// closing dropdowns item by clicking at any element except dropdowns container
document.addEventListener('click', function (e) {
  let currentElement = e.target;
  if (!currentElement.closest('.header__buttom-list')) {
    document.querySelectorAll('.header__buttom-btn').forEach(el => {
      el.classList.remove('header-menu__check_open');
    });
    document.querySelectorAll('.header__menu-container').forEach(el => {
      el.classList.remove('header__buttom-menu_open');
    })
  }
})

// Burger

document.querySelector('.header__burger').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.header__burger-menu').classList.add('header__burger-menu_active');
});

document.querySelector('.header__burger-cross').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.header__burger-menu').classList.remove('header__burger-menu_active');
});

// Search mobile

document.querySelector('.header__search-tablet').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.header__search-tablet-box').classList.add('header__burger-menu_active');
});

document.querySelector('.header__search-cross').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.header__search-tablet-box').classList.remove('header__burger-menu_active');
});

// Select

const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
});

// Accordion catalog

$(".catalog__accordion").accordion({
  heightStyle: "content"
});

// Табы галерея

document.querySelectorAll('.catalog__painter-btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.catalog__painter-btn').forEach(function (btn) {
      btn.classList.remove('catalog__painter-btn_active')
    });
    e.currentTarget.classList.add('catalog__painter-btn_active');
    document.querySelectorAll('.catalog__painter').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('catalog__painter_active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__painter_active');
  });
});

// Swiper Events

const swiperEvents = new Swiper('.events__swiper-container', {
  // Optional parameters
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 32,
    },
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 25,
    },
    900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 25,

    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  a11y: {
    prevSlideMessage: 'Предыдущие слайды',
    nextSlideMessage: 'Следующие слайды',
    slideLabelMessage: '{{index}} из {{slidesLength}}',
  },
});

// Тултипы

tippy('.projects__tooltip-marker', {
  trigger: 'click',
  duration: 300,
  offset: [0, 12],
  maxWidth: 262,
  theme: 'projects-tooltip-style',
});

// Swiper Projects

const swiperProjects = new Swiper('.projects__partners-swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,
  loop: false,
  navigation: {
    nextEl: ".projects__swiper-button-next",
    prevEl: ".projects__swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 54,
    },
    1025: {
      slidesPerView: 3,
    },
  },
  a11y: {
    prevSlideMessage: 'Предыдущие слайды',
    nextSlideMessage: 'Следующие слайды',
    slideLabelMessage: '{{index}} из {{slidesLength}}',
  },
});

// Inputmask

const form = document.querySelector('.showroom__form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7(999)999-99-99');
inputMask.mask(telSelector);

// Validation

const validation = new JustValidate('.showroom__form');

validation
  .addField('.showroom__input_name', [{
      rule: 'minLength',
      value: 3,
      errorMessage: 'Неверный формат, менее 3 символов',
    },
    {
      rule: 'maxLength',
      value: 10,
      errorMessage: 'Неверный формат, более 10 символов',
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя'
    }
  ])
  .addField('.showroom__input_tel', [{
      rule: 'required',
      value: true,
      errorMessage: 'Укажите ваш телефон',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ])
  .onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });

// YandexMap

ymaps.ready(init);

function init() {
  var showroomMap = new ymaps.Map("showroommap", {
      center: [55.76042118309381, 37.614456990737914],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl'],
    },

    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: {
        top: "200px",
        right: "20px"
      },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: {
        top: "120px",
        right: "20px"
      }
    });

  var myPlacemark = new ymaps.Placemark([55.76042118309381, 37.614456990737914], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/myplacemark.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-15, -15]
  });

  showroomMap.geoObjects.add(myPlacemark);
  // showroomMap.container.fitToViewport();
  showroomMap.behaviors.disable('scrollZoom');
}

// Gallery плавный скролл

(() => {
  const MOBILE_WIDTH = 768;

  function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function scrollToContent(link, isMobile) {
    if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
      return;
    }

    const href = link.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    });
  }

  document.querySelectorAll('.js-scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      scrollToContent(this, true);
    });
  });
})();

// Модальное окно

const btns = document.querySelectorAll('.gallery__slide-btn');
const modalOverlay = document.querySelector('.gallery-modal');
const modals = document.querySelectorAll('.gallery-modal__block');
const body = document.querySelector('body');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('gallery-modal__block_visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('gallery-modal__block_visible');
    modalOverlay.classList.add('gallery-modal_visible');
    body.classList.add('modal__scroll-hidden');
  });
});

modalOverlay.addEventListener('click', (e) => {
  console.log(e.target);

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('gallery-modal_visible');
    body.classList.remove('modal__scroll-hidden');
    modals.forEach((el) => {
      el.classList.remove('gallery-modal__block_visible');
    });
  }
});

let allCrosses = document.querySelectorAll('.gallery-modal__cross');

allCrosses.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    e.target.parentNode.parentNode.classList.remove('gallery-modal_visible');
    e.target.parentNode.classList.remove('gallery-modal__block_visible');
    body.classList.remove('modal__scroll-hidden');
  });
});
