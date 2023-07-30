import reviews from "./Slider/config/reviews";
import intro from "./Slider/config/intro";
import data from "./Slider/config/data";

export default function (el) {
  const name = el.getAttribute('data-slider');
  if (name === 'reviews') return reviews(el);
  if (name === 'intro') return intro(el);
  if (name === 'data') return data(el);

  console.error('Конфигурационный файл для слайдера не найден');
}
