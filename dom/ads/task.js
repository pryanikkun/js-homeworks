
function startRotator(rotator){
    let cases = rotator.querySelectorAll('.rotator__case');
    let activeCase = rotator.querySelector('.rotator__case_active');
    setInterval(() => {
        activeCase.classList.remove('rotator__case_active');
        let activeCaseIndex = Math.floor(Math.random() * cases.length);
        cases[activeCaseIndex].classList.add('rotator__case_active');
        activeCase = cases[activeCaseIndex];
    }, 1000);
}


document.querySelectorAll('.rotator').forEach(rotator => {
    startRotator(rotator);
});