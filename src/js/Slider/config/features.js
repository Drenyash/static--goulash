import {Navigation, Pagination} from "swiper";
import "swiper/swiper.css"

const desktop = window.matchMedia('(min-width: 1200px)');
const mobile = window.matchMedia('(min-width: 0px) and (max-width: 1199px)');
export default function (el) {
    const data = {
        modules: [Navigation, Pagination],
        spaceBetween: 10,
        slidesPerView: 'auto',
        slideVisibleClass: 'slider__item--visible',
        watchSlidesProgress: true,
    }

    try {
        if (el.querySelector('[data-nav]')) {
            data.navigation = {
                nextEl: el.querySelector('[data-button-next]'),
                prevEl: el.querySelector('[data-button-prev]'),
                disabledClass: 'slider__button--disabled',
            };
        }
    } catch (e) {
    }

    return data;
}
