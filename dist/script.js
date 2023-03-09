/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function () {
  let headActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'accordion-head--active';
  let contentActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'accordion-content--active';
  let paddings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headActive);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).toggleClass(contentActive);
      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px";
      } else {
        this[i].nextElementSibling.style.maxHeight = "0px";
      }
    });
  }
};
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion-head').accordion();

/***/ }),

/***/ "./src/js/lib/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/carousel.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.carousel = function () {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
    const slides = this[i].querySelectorAll('.carousel-item');
    const slidesField = this[i].querySelector('.carousel-slides');
    const dots = this[i].querySelectorAll('.carousel-indicators li');
    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach(slide => {
      slide.style.width = width;
    });
    let offset = 0;
    let slideIndex = 0;
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="next"]')).click(e => {
      e.preventDefault();
      if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += +width.replace(/\D/g, '');
      }
      slidesField.style.transform = `translateX(-${offset}px)`;
      if (slideIndex == slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }
      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="prev"]')).click(e => {
      e.preventDefault();
      if (offset == 0) {
        offset = +width.replace(/\D/g, '') * (slides.length - 1);
      } else {
        offset -= +width.replace(/\D/g, '');
      }
      slidesField.style.transform = `translateX(-${offset}px)`;
      if (slideIndex == 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex--;
      }
      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
    const sliderId = this[i].getAttribute('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`#${sliderId} .carousel-indicators li`).click(e => {
      const slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = +width.replace(/\D/g, '') * slideTo;
      slidesField.style.transform = `translateX(-${offset}px)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
  }
};
// Реализация верстки высоты, ширины и ссылок на картинки.
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createSlides = function (sliderSet) {
  for (let i = 0; i < this.length; i++) {
    const slidesCount = sliderSet.slides.length;
    // Устанавливаем ширину слайдера
    this[i].style.width = sliderSet.width + 'px';
    // Разметка HTML
    this[i].innerHTML = `
        <ol class="carousel-indicators"></ol>
    <div class="carousel-inner">
        <div class="carousel-slides"></div>
    </div>
    <a href="#" class="carousel-prev" data-slide="prev">
        <span class="carousel-prev-icon">&lt;</span>
    </a>
    <a href="#" class="carousel-next" data-slide="next">
        <span class="carousel-next-icon">&gt;</span>
    </a>
        `;
    // Создаем элементы разметки   
    for (let j = 0; j < slidesCount; j++) {
      const dotsItem = document.createElement('li'),
        slideItem = document.createElement('div'),
        slideImage = document.createElement('img');
      // Устанавливаем высоту слайдера
      this[i].querySelector('.carousel-inner').style.height = sliderSet.height + 'px';
      // Помещаем нижние индикаторы слайдера по количеству слайдов
      dotsItem.setAttribute('data-slide-to', '${j}');
      this[i].querySelector('.carousel-indicators').appendChild(dotsItem);
      // Помещаем слайдеры в контейнер
      this[i].querySelector('.carousel-slides').appendChild(slideItem);
      slideItem.classList.add('carousel-item');
      slideItem.appendChild(slideImage);
      slideImage.setAttribute('src', sliderSet.slides[j].url);
      slideImage.setAttribute('alt', sliderSet.slides[j].name);
    }
  }
  return this;
};
//Вызов
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('#example').createSlides({
  width: 700,
  height: 400,
  slides: [{
    name: 'photo1',
    url: "https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg"
  }, {
    name: 'photo2',
    url: "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg"
  }, {
    name: 'photo3',
    url: "https://pixlr.com/images/best-photo-editor-cover.jpg"
  }]
}).carousel();
// ----------- Carousel Slider версия без верстки. Верстка в HTML ----------

// $.prototype.carousel = function() {
//     for (let i = 0 ;i < this.length; i++) {
//         const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
//         const slides = this[i].querySelectorAll('.carousel-item');
//         const slidesField = this[i].querySelector('.carousel-slides');
//         const dots = this[i].querySelectorAll('.carousel-indicators li');

//         slidesField.style.width = 100 * slides.length + '%';
//         slides.forEach(slide => {
//             slide.style.width = width;
//         });

//         let offset = 0;
//         let slideIndex = 0;

//         $(this[i].querySelector('[data-slide="next"]')).click((e) => {
//             e.preventDefault();
//             if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
//                 offset = 0;
//             } else {
//                 offset += +width.replace(/\D/g, '');
//             }

//             slidesField.style.transform = `translateX(-${offset}px)`;

//             if (slideIndex == slides.length - 1) {
//                 slideIndex = 0;
//             } else {
//                 slideIndex++;
//             }
//             dots.forEach(dot => dot.classList.remove('active'));
//             dots[slideIndex].classList.add('active');
//         });

//         $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
//             e.preventDefault();
//             if (offset == 0) {
//                 offset = +width.replace(/\D/g, '') * (slides.length - 1);
//             } else {
//                 offset -= +width.replace(/\D/g, '');
//             }

//             slidesField.style.transform = `translateX(-${offset}px)`;

//             if (slideIndex == 0) {
//                 slideIndex = slides.length - 1;
//             } else {
//                 slideIndex--;
//             }
//             dots.forEach(dot => dot.classList.remove('active'));
//             dots[slideIndex].classList.add('active');
//         });

//         const sliderId = this[i].getAttribute('id');
//         $(`#${sliderId} .carousel-indicators li`).click(e => {
//             const slideTo = e.target.getAttribute('data-slide-to');

//             slideIndex = slideTo;
//             offset = +width.replace(/\D/g, '') * slideTo;

//             slidesField.style.transform = `translateX(-${offset}px)`;
//             dots.forEach(dot => dot.classList.remove('active'));
//             dots[slideIndex].classList.add('active');
//         }); 
//     }
// };

// $('.carousel').carousel();

/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute('data-target');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
    });
    // Работа с закрывающим элементом
    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(elem => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).click(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';
        if (created) {
          document.querySelector(target).remove();
        }
      });
    });
    // Работа с подложкой    
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(e => {
      if (e.target.classList.contains('modal')) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';
        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }
};
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal();
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function () {
  let {
    text,
    btns
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

    // btns = {count: num, settings: [[text, classNames=[], close, cb]]}
    const buttons = [];
    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement('button');
      btn.classList.add('btn', ...btns.settings[j][1]);
      btn.textContent = btns.settings[j][0];
      if (btns.settings[j][2]) {
        btn.setAttribute('data-close', 'true');
      }
      if (btns.settings[j][3] && typeof btns.settings[j][3] === 'function') {
        btn.addEventListener('click', btns.settings[j][3]);
      }
      buttons.push(btn);
    }
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">
                        ${text.title}
                    </div>
                </div>
                <div class="modal-body">
                    ${text.body}
                </div>
                <div class="modal-footer">
                    
                </div>
            </div>
        </div>
        `;
    modal.querySelector(".modal-footer").append(...buttons);
    document.body.appendChild(modal);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute('data-target')).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/js/lib/components/tab.js":
/*!**************************************!*\
  !*** ./src/js/lib/components/tab.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on('click', () => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass('tab-item--active').siblings().removeClass('tab-item--active').closest('.tab').find('.tab-content').removeClass('tab-content--active').eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()).addClass('tab-content--active');
    });
  }
};
Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tabpanel] .tab-item').tab();

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  return new $.prototype.init(selector);
};
$.prototype.init = function (selector) {
  if (!selector) {
    return this; //Возвращает пустой объект {}
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};
$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tab */ "./src/js/lib/components/tab.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/carousel */ "./src/js/lib/components/carousel.js");
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/requests */ "./src/js/lib/services/requests.js");













/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

// метод, который позволяет быстро менять  html структуру внутри какого-то елемента. 
//Так же может получать содержимое этого елемента
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content; // Передаем аргумент с контентом и заменяем внутри элемента.
    } else {
      return this[i].innerHTML; // Если контент не был передан, то тогда мы получаем содержимое этого элемента.
    }
  }

  return this;
};
// Получение определенного элемента по номеру
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length; // Превращаем обьект в маасив и используем свойство length которое есть в масиве.

  for (let i = 0; i < objLength; i++) {
    // Очищаем полностью обьект, он будет пустой так как мы все удалили из него
    delete this[i];
  }
  this[0] = swap; // Формируем заново обьект, в котором будет один элемент и одно свойство, с которым мы будем работать.
  this.length = 1;
  return this;
};
// Получение номера по порядку среди всех соседий, у одного общего родителя (index)
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode; // получили родителя искомого елемента
  const childs = [...parent.children]; // получаем html колекцию, псевдомассив. Поэтому его превращаем в стандартный масив.

  const findMyIndex = item => {
    return item == this[0];
  };
  return childs.findIndex(findMyIndex);
};
// Находжение определенного элемента среди всех выбраных
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0; // общее количество
  let counter = 0; // записанные елементы

  const copyObj = Object.assign({}, this); // создаем копию объекта, в нутри каждого скопированного элемента мы попробуем найти елементы, подходящие под заданный селектор selector.

  for (let i = 0; i < copyObj.length; i++) {
    // в копии ищим заданный селектор и записываем его в arr
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length == 0) {
      // если елементы не найдены
      continue;
    }
    for (let j = 0; j < arr.length; j++) {
      //если елементы найдени то работаем с this и записываем в него найденные элементы.
      this[counter] = arr[j];
      counter++;
    }
    numberOfItems += arr.length;
  }
  this.length = numberOfItems;
  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    // удаляем остаток
    delete this[numberOfItems];
  }
  return this;
};
//Работа с получиными элементами (доработать!!!)

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector) === null) {
      return this;
    } else {
      this[i] = this[i].closest(selector);
      counter++;
    }
  }
  const objLength = Object.keys(this).length;
  for (; counter < objLength; counter++) {
    // удаляем остаток, очистка
    delete this[counter];
  }
  return this;
};

// Получает всех соседние элементы но не сам элемент
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0; // общие количество
  let counter = 0; // записанные елементы

  const copyObj = Object.assign({}, this); // Cоздаем копию объекта, в нутри каждого скопированного элемента мы попробуем найти елементы, подходящие под заданный селектор selector.

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children; // В копии ищим заданный селектор и записываем его в arr

    for (let j = 0; j < arr.length; j++) {
      //Если элементы найдены то работаем с this и записываем в него найденные элементы.
      if (copyObj[i] === arr[j]) {
        // Если этот элемент равен элементу который перебирается в arr, это тот элемент на котором и произошло действие и мы его пропускаем.
        continue;
      }
      this[counter] = arr[j];
      counter++;
    }
    numberOfItems += arr.length - 1;
  }
  this.length = numberOfItems;
  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    // удаляем остаток
    delete this[numberOfItems];
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttr = function (name) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].getAttribute(name)) {
      continue;
    }
    return this[i].getAttribute(name);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(name)) {
      this[i].setAttribute(name, value);
    } else {
      continue;
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttr = function (name) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].hasAttribute(name)) {
      continue;
    } else {
      this[i].removeAttribute(name);
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(name)) {
      this[i].removeAttribute(name);
    } else {
      this[i].setAttribute(name, value);
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  // спред оператор, нужен для того если мы хотим добавить несколько классов сразу
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.add(...arguments); // рест оператор, мы разварачиваем все имена классов которые были переданы во внутрь этой функции
  }

  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.remove(...arguments);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    } else {
      this[i].classList.toggle(classNames);
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = '';
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    this[i].style.display = 'none';
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }
    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  let timeStart; // Запускаем анимацию

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }
    let timeElapsed = time - timeStart; // Отслеживает выполнение анимации
    let complection = Math.min(timeElapsed / dur, 1); // Отвечает за изменения параметров на странице

    cb(complection);
    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      // Этот блок отвечает за окончание анимации
      if (typeof fin === 'function') {
        fin();
      }
    }
  }
  return _animateOverTime;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block';
    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };
    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;
      if (complection === 1) {
        this[i].style.display = 'none';
      }
    };
    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }
  return this;
};

// $.prototype.fadeToggle = function(dur, display, fin) {
//     for (let i = 0; i < this.length; i++) {

//         if (window.getComputedStyle(this[i]).display === "none") {  // проверяем показан ли елемент в даный момент на текущей странице
//             $(this[i]).fadeIn(dur, display, fin);
//         } else {
//             $(this[i]).fadeOut(dur, fin);
//         }
//     }
//     return this;
// };

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      this[i].style.display = display || 'block';
      const _fadeIn = complection => {
        this[i].style.opacity = complection;
      };
      const ani = this.animateOverTime(dur, _fadeIn, fin);
      requestAnimationFrame(ani);
    } else {
      const _fadeOut = complection => {
        this[i].style.opacity = 1 - complection;
        if (complection === 1) {
          this[i].style.display = 'none';
        }
      };
      const ani = this.animateOverTime(dur, _fadeOut, fin);
      requestAnimationFrame(ani);
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/services/requests.js":
/*!*****************************************!*\
  !*** ./src/js/lib/services/requests.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.get = async function (url) {
  let dataTypeAnswer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  switch (dataTypeAnswer) {
    case 'json':
      return await res.json();
    case 'text':
      return await res.text();
    case 'blob':
      return await res.blob();
  }
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.post = async function (url, data) {
  let dataTypeAnswer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  switch (dataTypeAnswer) {
    case 'json':
      return await res.json();
    case 'text':
      return await res.text();
    case 'blob':
      return await res.blob();
  }
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#first-out').on('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(1).fadeOut(800);
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#first-in').on('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(1).fadeIn(800);
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-count="second-out"]').on('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(2).fadeOut(800);
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-count="second-in"]').on('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(2).fadeIn(800);
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('button', '#toggle').eq(4).on('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-500').fadeToggle(800);
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map