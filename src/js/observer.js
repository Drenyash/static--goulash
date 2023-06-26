const target = document.querySelectorAll("[data-observe]");

if (target) {
    target.forEach(targetEl => {
        const options = {
            rootMargin: "-25%",
            threshold: 0
        };
        const callback = function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    targetEl.classList.add("focused");
                }
            });
        };
        const observer = new IntersectionObserver(callback, options);

        observer.observe(targetEl);
    })
}