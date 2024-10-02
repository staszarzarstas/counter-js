const items = document.querySelectorAll(".count-item > h4");

// Дата отсчета 
let countDownDate = new Date(2025, 10, 2, 10, 0, 0).getTime();

function getDownTime() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Получаем один день в мс
    const oneDay = 24 * 60 * 60 * 1000;
    // Один час в мс
    const oneHour = 60 * 60 * 1000;
    // Одна минута в мс
    const oneMinute = 60 * 1000;
    // Одна секунда в мс
    const oneSecond = 1000;

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / oneSecond);

    const values = [days, hours, minutes, seconds];

    // Добавим значения на страницу 
    items.forEach(function(item, index) {
        item.textContent = values[index];
    });

    // Если отсчет закончился, остановим таймер
    if (distance < 0) {
        clearInterval(countDown);
        items.forEach(item => item.textContent = "0");
    }
}

let countDown = setInterval(getDownTime, 1000);
getDownTime();
