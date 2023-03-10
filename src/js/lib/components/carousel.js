import $ from '../core';

$.prototype.carousel = function() {
    for (let i = 0 ;i < this.length; i++) {
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

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
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

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
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
        $(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        }); 
    } 
};
// ???????????????????? ?????????????? ????????????, ???????????? ?? ???????????? ???? ????????????????.
$.prototype.createSlides = function(sliderSet) {
    for (let i = 0; i < this.length; i++) {
        const slidesCount = sliderSet.slides.length;
// ?????????????????????????? ???????????? ????????????????
        this[i].style.width = sliderSet.width +'px';
// ???????????????? HTML
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
// ?????????????? ???????????????? ????????????????   
    for (let j = 0; j < slidesCount; j++) {
        const dotsItem = document.createElement('li'),
        slideItem = document.createElement('div'),
        slideImage = document.createElement('img');
// ?????????????????????????? ???????????? ????????????????
        this[i].querySelector('.carousel-inner').style.height = sliderSet.height + 'px';
// ???????????????? ???????????? ???????????????????? ???????????????? ???? ???????????????????? ??????????????
        dotsItem.setAttribute('data-slide-to', '${j}');
        this[i].querySelector('.carousel-indicators').appendChild(dotsItem);
// ???????????????? ???????????????? ?? ??????????????????
        this[i].querySelector('.carousel-slides').appendChild(slideItem);
        slideItem.classList.add('carousel-item');
        slideItem.appendChild(slideImage);
        slideImage.setAttribute('src', sliderSet.slides[j].url);
        slideImage.setAttribute('alt', sliderSet.slides[j].name);
    }
    }
    return this;
};
//??????????
$('#example').createSlides({
    width: 700,
    height: 400,
    slides: [
        {name: 'photo1', url: "https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg"},
        {name: 'photo2', url: "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg"},
        {name: 'photo3', url: "https://pixlr.com/images/best-photo-editor-cover.jpg"}
    ]
}).carousel();
// ----------- Carousel Slider ???????????? ?????? ??????????????. ?????????????? ?? HTML ----------

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



