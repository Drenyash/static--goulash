import { Navigation, Pagination } from "swiper";
import "swiper/swiper.css"

export default function (el) {
    const data = {
        modules: [Navigation, Pagination],
        spaceBetween: 10,
        slidesPerView: 'auto',
        slideVisibleClass: 'slider__item--visible',
        watchSlidesProgress: true,
        breakpoints: {
            1200: {
                spaceBetween: 30,
                slidesPerView: 3,
            }
        }
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
