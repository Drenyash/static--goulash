const burger = document.querySelector('[data-burger]')
const nav = document.querySelector('[data-header-nav]')
burger.addEventListener('click', ()=> {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
})
