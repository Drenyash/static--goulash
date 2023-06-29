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
    // if (targetEl.dataset.animate === 'rotate') {
    //     targetEl.addEventListener('mousemove', (evt)=> {
    //         const width = targetEl.offsetWidth;
    //         const height = targetEl.offsetHeight;
    //         const mouseX = evt.offsetX - width / 2;
    //         const mouseY = height / 2 - evt.offsetY;
    //         const maxAngle = 20;
    //         const angleX = -(mouseY / height) * maxAngle;
    //         const angleY = (mouseX / width) * maxAngle;
    //
    //         targetEl.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    //     })
    //     targetEl.addEventListener('mouseleave', ()=> {
    //         targetEl.style.transform = 'none'
    //     })
    // }
})
