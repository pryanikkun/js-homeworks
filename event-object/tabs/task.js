const tabs = document.querySelectorAll('.tab')
const contents = document.querySelectorAll('.tab__content')
let lastActiveTab = 0;

tabs.forEach(tab => {
    tab.addEventListener(
        'click',
        () => {
            const index = Array.from(tabs).indexOf(tab);
            tabs[lastActiveTab].classList.remove('tab_active')
            contents[lastActiveTab].classList.remove('tab__content_active')
            tab.classList.add('tab_active')
            contents[index].classList.add('tab__content_active')
            lastActiveTab = index;
        }
    );
})
