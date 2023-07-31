import reviews from "./Slider/config/reviews";
import intro from "./Slider/config/intro";
import data from "./Slider/config/data";
import features from "./Slider/config/features";

export default function (el) {
  const name = el.getAttribute('data-slider');
  if (name === 'reviews') return reviews(el);
  if (name === 'intro') return intro(el);
  if (name === 'data') return data(el);
  if (name === 'features') return features(el);

  console.error('Конфигурационный файл для слайдера не найден');
}
