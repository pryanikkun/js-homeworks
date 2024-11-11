document.addEventListener('scroll', () => {
    const reveal = document.querySelectorAll('.reveal');
    reveal.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
        if (elementTop < viewportHeight && elementBottom > 0) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    })
})