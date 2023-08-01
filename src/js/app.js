import Swiper from "swiper";
import sliderFactory from "./slider";
import { Accardeone } from "./accardeone";
import swiper from "swiper";

class App {
  constructor() {
    this.createSliders();
    this.initAccordeone();
  }

  createSliders() {
    const el = document.querySelectorAll("[data-slider]");

    if (el) this.sliders = [];

    el.forEach((item) => {
            let slider = this.initSlider(item);

      item.onkeydown = (evt) => {
        if (evt.key === "Tab") {
          evt.preventDefault();
        }
      };

      const updateSlider = () => {
        if (typeof slider === "undefined") {
          slider = this.initSlider(item);
          slider.update();
        }
      };

      const changeStateOfSlider = (width) => {
        if (width >= 1200) {
          if (typeof slider !== "undefined") {
            slider.destroy(true, true);
            slider = undefined;
          }
        } else {
          updateSlider();
        }
      };

      if (item.hasAttribute("data-desktop")) {
        changeStateOfSlider(window.innerWidth);
        window.addEventListener("resize", () => {
          changeStateOfSlider(window.innerWidth);
        });
      }

      this.sliders.push(slider);
    });
  }

  initSlider(item) {
    return new Swiper(item.querySelector("[data-slide]"), sliderFactory(item));
  }

  initAccordeone() {
    const el = document.querySelectorAll('[data-accordeone]');
    el.forEach(item => new Accardeone(item));
  }
}

export default App;
