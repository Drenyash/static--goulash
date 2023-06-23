class Accardeone {
  constructor(el) {
    this.el = el;
    this.close = el.querySelector(".faq__icon");
    console.log(this.close);

    this.setListeners();
  }

  setListeners() {
    this.toggleAccardeon();
    this.closeAccardeon();
  }

  toggleAccardeon() {
    this.el.addEventListener("click", () => this.el.classList.add("faq__item--active"));
  }

  closeAccardeon() {
    this.close.addEventListener("click", (evt) => {
      evt.stopPropagation();
      this.el.classList.remove("faq__item--active");
    });
  }
}

export { Accardeone };