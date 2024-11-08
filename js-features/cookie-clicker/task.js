const img = document.getElementById('cookie')
const span = document.getElementById('clicker__counter')
let clickerCounter = Number(span.textContent)

img.onclick = () => {
    img.width = Number(img.width) + 100;
    clickerCounter += 1;
    span.textContent = clickerCounter;
    setTimeout(
        () => {img.width = Number(img.width) - 100;},
        50
    )
}