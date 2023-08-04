import { Navigation, Pagination } from "swiper";
import "swiper/swiper.css"

export default function (el) {
    const data = {
        modules: [Navigation, Pagination],
        spaceBetween: 0,
        slidesPerView: 1,
        slideVisibleClass: 'slider__item--visible',
        watchSlidesProgress: true,
        breakpoints: {
            1200: {
                spaceBetween: 30,
                slidesPerView: 2,
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
        if (el.querySelector('[data-pagination]')) {
            data.pagination = {
                el: el.querySelector('[data-pagination]'),
            }
        }
    } catch (e) {
    }

    return data;
}
