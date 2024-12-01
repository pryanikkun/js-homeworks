tips = document.querySelectorAll('.has-tooltip');

[...tips].forEach((tip) => {
    el = document.createElement('div');
    el.classList.add('tooltip');
    const positionTooltip = () => {
        const rect = tip.getBoundingClientRect();
        el.style.left = rect.left + 'px';
        el.style.top = rect.bottom + 'px';
    };
    positionTooltip();
    el.textContent = tip.getAttribute('title');
    tip.insertAdjacentElement('afterend', el);
    tip.addEventListener('click', (event) => {
        event.preventDefault();
        tip.nextElementSibling.classList.toggle('tooltip_active');
        if (el.classList.contains('tooltip_active')) {
            positionTooltip();
        }
    })
    window.addEventListener('scroll', (event) => {
        event.preventDefault();
        positionTooltip();
    });
})

