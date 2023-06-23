import reviews from "./Slider/config/reviews";

export default function (el) {
  const name = el.getAttribute('data-slider');
  if (name === 'reviews') return reviews(el);

  console.error('Конфигурационный файл для слайдера не найден');
}
