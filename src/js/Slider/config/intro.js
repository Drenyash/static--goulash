import {Autoplay, EffectFade, Navigation, Pagination} from "swiper";
import "swiper/swiper-bundle.css"
import "swiper/swiper.css";

const currentPagination = document.querySelector('[data-pagination-current]')
const totalPagination = document.querySelector('[data-pagination-total]')

export default function (el) {
    const data = {
        modules: [Navigation, Pagination, EffectFade, Autoplay],
        slidesPerView: 1,
        speed: 300,
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        on: {
            slideChange: function () {
                currentPagination.textContent = `0${this.realIndex + 1}`;
            },
            init: function () {
                currentPagination.textContent = `0${this.realIndex + 1}`;
                totalPagination.textContent = `0${this.slides.length}`;
            }
        }
    }

    try {
        if (el.querySelector('[data-pagination]')) {
            data.pagination = {
                el: '[data-pagination]',
                type: 'bullets',
                bulletActiveClass: 'slider-pagination__bullet--active',
                bulletClass: 'slider-pagination__bullet',
            };
        }
    } catch (e) {
    }

    return data;
}