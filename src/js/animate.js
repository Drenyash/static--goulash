const target = document.querySelectorAll("[data-animate]");
const section = document.querySelectorAll('[data-section-animate]')
const invertItem = document.querySelector('[data-animate-invert]')

target.forEach((targetEl, idx) => {
    if (targetEl.dataset.animate === 'move') {
        let x, y;
        section[0].addEventListener("mousemove", (evt) => {
            x = evt.clientX / window.innerWidth - 0.4;
            y = evt.clientY / window.innerHeight - 0.4;
        });
        const moveCard = () => {
            const image = targetEl.querySelector('.article-functional__image')
            if (image) {
                image.style.transform = `translate3D(${x * 50}px, ${y * 50}px, 0)`;
            } else {
                invertItem.style.transform = `translate3D(${x * 50}px, ${y * 50}px, 0)`;
                targetEl.style.transform = `translateX(${-x * 50}px)`;
            }
            requestAnimationFrame(moveCard);
        };
        requestAnimationFrame(moveCard);
    }
})
