import reviews from "./Slider/config/reviews";
import intro from "./Slider/config/intro";

export default function (el) {
  const name = el.getAttribute('data-slider');
  if (name === 'reviews') return reviews(el);
  if (name === 'intro') return intro(el);

  console.error('Конфигурационный файл для слайдера не найден');
}
