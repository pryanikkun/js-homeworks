const spanTimer = document.getElementById('timer')
setInterval(() => {
    let currentValue = Number(spanTimer.textContent);
    if (currentValue >= 0) {
        currentValue -= 1
        spanTimer.textContent = currentValue;
    }
    if (currentValue < 0) {
        alert('Вы победили в конкурсе!')
    }
}, 1000)
 