const modal = document.querySelector('[data-modal]')

if (modal) {
    const openBtn = document.querySelector('[data-question]')
    const container = modal.querySelector('.modal__container');
    const close = document.querySelector('[data-close]');
    openBtn.addEventListener('click', ()=> {
        toggleModal()
        console.log('123')
    })

    modal.addEventListener('click', ()=> {
        toggleModal()
    })

    close.addEventListener('click', ()=> {
        toggleModal()
    })

    container.addEventListener('click', evt => evt.stopPropagation())

    const toggleModal = () => {
        modal.classList.toggle('active')
    }

}
